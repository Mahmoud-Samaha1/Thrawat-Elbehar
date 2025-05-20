import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';
import { customerSectionModel } from '../../../models/customerSection.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers-section',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './customers-section.component.html',
  styleUrl: './customers-section.component.scss'
})
export class CustomersSectionComponent implements OnInit {
  url: string = environment.apiUrl
  endPoint: string = "API/Clients/Get"
  customersSectionData!: customerSectionModel[]
  _http = inject(HttpClient)
  getServicesSectionData() {
    return this._http.get<customerSectionModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.customersSectionData = res; console.log(this.customersSectionData); });
  }
  customOptions: OwlOptions;
  defaultData = [
    {
      image: '/images/customer-1.png',

      title: 'الاستزراع السمكي المستدام',
      description: `نلتــزم بتوفيــــر بيئــة طبيعيــة وصحــية لتربيــة الأسمــاك، مـن خـــلال استخـدام أحدث تقنيــات الاستزراع السمكي المستـــدام، مما يضمن نموًا صحيًا للأسماك وجودة عالية للمنتجات.`
    },
    {
      image: '/images/customer-2.png',

      title: 'توريد الأسماك والمنتجات البحرية الطازجة',
      description: `نقدم مجـموعــة متنوعـــة من الأسماك الطازجة والمأكولات البحـــرية عاليـة الجودة لتلبية احتياجــات الأســواق المحلـــية والعالميـــة، مع ضمــان أفضــل معايير الحفظ والنقل.
`
    },
    {
      image: '/images/customer-3.png',

      title: 'تجهيز وتعبئة المنتجات البحرية',
      description: `نوفر خدمات تجهيز الأسمـــاك وتعبئتــها وفـــق أعلـــى معايير السلامة الغذائية، مع إمكانيـة التقــطــيع والتغلــيف حســـــب متطلبات العملاء للحفاظ على نضارة المنتج.`
    },

    {
      image: '/images/customer-1.png',

      title: 'الاستزراع السمكي المستدام',
      description: `نلتــزم بتوفيــــر بيئــة طبيعيــة وصحــية لتربيــة الأسمــاك، مـن خـــلال استخـدام أحدث تقنيــات الاستزراع السمكي المستـــدام، مما يضمن نموًا صحيًا للأسماك وجودة عالية للمنتجات.`
    },
    {
      image: '/images/customer-2.png',

      title: 'توريد الأسماك والمنتجات البحرية الطازجة',
      description: `نقدم مجـموعــة متنوعـــة من الأسماك الطازجة والمأكولات البحـــرية عاليـة الجودة لتلبية احتياجــات الأســواق المحلـــية والعالميـــة، مع ضمــان أفضــل معايير الحفظ والنقل.
`
    },
    {
      image: '/images/customer-3.png',

      title: 'تجهيز وتعبئة المنتجات البحرية',
      description: `نوفر خدمات تجهيز الأسمـــاك وتعبئتــها وفـــق أعلـــى معايير السلامة الغذائية، مع إمكانيـة التقــطــيع والتغلــيف حســـــب متطلبات العملاء للحفاظ على نضارة المنتج.`
    },

  ];
  constructor() {
    this.customOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      rtl: true,
      dotsEach: 4,

      // center: true,
      // autoplay: true,
      nav: true,
      navText: [`<i class="fi fi-sr-angle-small-right"></i>`, `<i class="fi fi-sr-angle-small-left"></i>`],
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
          items: 4,
          margin: 10,
        },
        1440: {
          items: 4,
          margin: 10,
        },
      },
    }
  }
  ngOnInit(): void {
    this.getServicesSectionData()
  }
}
