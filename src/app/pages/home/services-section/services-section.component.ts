import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  customOptions: OwlOptions;
  defaultData = [
    {
      image: '../../../../../../assets/images/maleAvatar.svg',
      date: '16 نوفمبر عام 2023 - 20 جماد الأول 1445',
      title: 'محمد كامل السلمان',
      description: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية `,
      sectionName: 'الفئات المستهدفة'
    },
    {
      image: '../../../../../../assets/images/maleAvatar.svg',
      date: '16 نوفمبر عام 2023 - 20 جماد الأول 1445',
      title: 'محمد كامل السلمان',
      description: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية `,
      sectionName: 'الفئات المستهدفة'
    },
    {
      image: '../../../../../../assets/images/maleAvatar.svg',
      date: '16 نوفمبر عام 2023 - 20 جماد الأول 1445',
      title: 'محمد كامل السلمان',
      description: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية `,
      sectionName: 'الفئات المستهدفة'
    },
    {
      image: '../../../../../../assets/images/maleAvatar.svg',
      date: '16 نوفمبر عام 2023 - 20 جماد الأول 1445',
      title: 'محمد كامل السلمان',
      description: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية `,
      sectionName: 'الفئات المستهدفة'
    },
    {
      image: '../../../../../../assets/images/maleAvatar.svg',
      date: '16 نوفمبر عام 2023 - 20 جماد الأول 1445',
      title: 'محمد كامل السلمان',
      description: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية `,
      sectionName: 'الفئات المستهدفة'
    },
    {
      image: '../../../../../../assets/images/maleAvatar.svg',
      date: '16 نوفمبر عام 2023 - 20 جماد الأول 1445',
      title: 'محمد كامل السلمان',
      description: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية `,
      sectionName: 'الفئات المستهدفة'
    },
  ];
  constructor() {
    this.customOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      rtl: true,
      dotsEach: 1,

      // center: true,
      // autoplay: true,
      // nav: true,

      responsive: {
        0: {
          items: 1,
          margin: 5,
          // dotsEach: 2,
          // slideBy: 2
        },
        425: {
          items: 1,
          margin: 7,
        },
        600: {
          items: 2,
          margin: 10,
        },
        870: {
          items: 2,
          margin: 15,
        },
        1024: {
          items: 3,
          margin: 15,
        },
        1200: {
          items: 3,
          margin: 10,
        },
        1440: {
          items: 4,
          margin: 10,
        },
      },
    }
  }
}
