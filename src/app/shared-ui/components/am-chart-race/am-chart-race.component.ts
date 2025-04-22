import { Component, ElementRef, HostListener, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
// amCharts imports
import { allData } from '../../../data';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
@Component({
  selector: 'app-am-chart-race',
  standalone: true,
  imports: [],
  templateUrl: './am-chart-race.component.html',
  styleUrl: './am-chart-race.component.scss'
})
export class AmChartRaceComponent {
  @ViewChild('chartContainer', { static: true }) chartDiv!: ElementRef;

  private root!: am5.Root;
  private stepDuration: number = 2000;
  private startYear: number = 2002;
  private updateInterval!: any;
  private sortInterval!: any;
  // private allData = { /* Your data object here */ };
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) { }

  ngOnInit(): void {
    this.initializeChart();
    this.handleResize()
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
    clearInterval(this.updateInterval);
    clearInterval(this.sortInterval);
  }


  @HostListener('window:resize', ['$event'])
  handleResize(): void {
    if (this.root) {
      this.root.resize(); // Trigger amCharts resize function
    }
  }


  private initializeChart(): void {
    this.root = am5.Root.new(this.chartDiv.nativeElement);

    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Create an XY chart and enable panning
    const chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: true, // Enable horizontal panning
      panY: true, // Enable vertical panning
      wheelX: "none", // Disable zooming with the mouse wheel on the X-axis
      wheelY: "none" // Disable zooming with the mouse wheel on the Y-axis
    }));


    // Create a renderer for the Y-axis, setting it to be inversed
    const yRenderer = am5xy.AxisRendererY.new(this.root, { inversed: true });


    // Add a category axis to the Y-axis, using the `network` field for categories
    const yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "network", // Field for categories
      renderer: yRenderer // Apply the custom renderer
    }));


    // Add a value axis to the X-axis
    const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererX.new(this.root, {})// Default renderer
    }));

    // Set interpolation settings for smooth animations on the X-axis
    xAxis.set("interpolationDuration", this.stepDuration / 10);
    xAxis.set("interpolationEasing", am5.ease.linear);

    // Add a column series to the chart
    const series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Series", // Series name
      xAxis: xAxis, // Bind the X-axis
      yAxis: yAxis, // Bind the Y-axis
      valueXField: "value", // Field for X-axis values
      categoryYField: "network" // Field for Y-axis categories
    }));


    // Add an adapter to dynamically set the fill color of columns
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors")?.getIndex(series.columns.indexOf(target));
    });
    // series.columns.template.adapters.add("fill", (fill, target) => {
    //   const dataItem = target.dataItem as am5.DataItem<am5xy.IColumnSeriesDataItem>; // Explicit type cast
    //   const category = dataItem?.get("categoryY"); // Safely get the category
    //   if (category === "Facebook") {
    //     return am5.color(0x4267b2); // Facebook Blue
    //   } else if (category === "Twitter") {
    //     return am5.color(0x1da1f2); // Twitter Blue
    //   } else if (category === "Instagram") {
    //     return am5.color(0xe1306c); // Instagram Pink
    //   } else {
    //     return am5.color("rgb(95, 95, 95)"); // Default Gray
    //   }
    // });




    // Add a bullet (label) to each column in the series
    series.bullets.push(() => {
      return am5.Bullet.new(this.root, {
        locationX: 1,// Position the label near the end of the column
        sprite: am5.Label.new(this.root, {
          text: "{valueXWorking.formatNumber('#.## a')}", // Format the value
          fill: this.root.interfaceColors.get("alternativeBackground"), // Set the text color
          // fill: am5.color(0xffffff), // Set the text color
          centerX: am5.p100, // Center the label horizontally
          centerY: am5.p50, // Center the label vertically
          populateText: true // Enable dynamic text population

        })
      });
    });


    // Add a large label to display the current year
    const label = chart.plotContainer.children.push(am5.Label.new(this.root, {
      text: this.startYear.toString(), // Initial text for the label
      fontSize: "2em", // Set font size
      x: am5.p100, // Center horizontally
      y: am5.p100, // Position near the top (10% from the top)
      centerX: am5.p100, // Align the label's center horizontally
      centerY: am5.p100, // Align the label's center vertically
      fill: am5.color(0x333333), // Set text color
      fontWeight: "bold" // Optional: Add bold styling
    }));


    // Initialize the chart data
    const initialData = allData[this.startYear];
    for (const network in initialData) {
      series.data.push({ network, value: initialData[network] });// Add series data
      yAxis.data.push({ network }); // Add Y-axis data
    }

    // Update the data for the current year
    const updateData = () => {
      if (allData[this.startYear]) {
        label.set("text", this.startYear.toString());// Update the year label

        // Adjust the Y-axis zoom level based on non-zero items
        let itemsWithNonZero = 0;
        series.dataItems.forEach(dataItem => {
          const category = dataItem.get("categoryY");
          const value = allData[this.startYear][category!] || 0;
          if (value > 0) itemsWithNonZero++;

          dataItem.animate({ key: "valueX", to: value, duration: this.stepDuration, easing: am5.ease.linear });
          dataItem.animate({ key: "valueXWorking", to: value, duration: this.stepDuration, easing: am5.ease.linear });
        });

        yAxis.zoom(0, itemsWithNonZero / yAxis.dataItems.length);
      }
    };

    const sortCategoryAxis = () => {
      series.dataItems.sort((x, y) => y.get("valueX")! - x.get("valueX")!);

      yAxis.dataItems.forEach(dataItem => {
        const seriesDataItem = series.dataItems.find(item => item.get("categoryY") === dataItem.get("category"));
        if (seriesDataItem) {
          const index = series.dataItems.indexOf(seriesDataItem);
          const deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;

          if (dataItem.get("index") !== index) {
            dataItem.set("index", index);
            dataItem.set("deltaPosition", -deltaPosition);
            dataItem.animate({ key: "deltaPosition", to: 0, duration: this.stepDuration / 2, easing: am5.ease.out(am5.ease.cubic) });
          }
        }
      });

      yAxis.dataItems.sort((x, y) => x.get("index")! - y.get("index")!);
    };


    // Periodically update the data and sort the chart
    this.updateInterval = setInterval(() => {
      this.startYear++; // Increment the year
      if (this.startYear > 2018) {
        clearInterval(this.updateInterval); // Stop updating when the last year is reached
        clearInterval(this.sortInterval); // Stop sorting
      } else {
        updateData();
      }
    }, this.stepDuration); // Update the chart data

    this.sortInterval = setInterval(() => {
      sortCategoryAxis(); // Sort the category axis
    }, 100);
  }


}
