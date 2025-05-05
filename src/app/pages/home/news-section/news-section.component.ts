import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent {
  customOptions: OwlOptions;
  defaultData = [
    {
      image: '/images/service-1.svg',

      title: 'الاستزراع السمكي المستدام',
      description: `نلتــزم بتوفيــــر بيئــة طبيعيــة وصحــية لتربيــة الأسمــاك، مـن خـــلال استخـدام أحدث تقنيــات الاستزراع السمكي المستـــدام، مما يضمن نموًا صحيًا للأسماك وجودة عالية للمنتجات.`
    },
    {
      image: '/images/service-2.svg',

      title: 'توريد الأسماك والمنتجات البحرية الطازجة',
      description: `نقدم مجـموعــة متنوعـــة من الأسماك الطازجة والمأكولات البحـــرية عاليـة الجودة لتلبية احتياجــات الأســواق المحلـــية والعالميـــة، مع ضمــان أفضــل معايير الحفظ والنقل.
`
    },
    {
      image: '/images/service-3.svg',

      title: 'تجهيز وتعبئة المنتجات البحرية',
      description: `نوفر خدمات تجهيز الأسمـــاك وتعبئتــها وفـــق أعلـــى معايير السلامة الغذائية، مع إمكانيـة التقــطــيع والتغلــيف حســـــب متطلبات العملاء للحفاظ على نضارة المنتج.`
    },
    {
      image: '/images/service-4.svg',

      title: 'توفير الزريعة عالية الجودة',
      description: `ندعم مزارع الأسماك الأخرى من خــلال توفيـر زريعة الأسماك ذات الجـــودة الممتـــازة، ممــا يساعد على تعزيــز الإنتـاج وتحقيق أقصى استفـــادة من الموارد الطبيعية.
`
    },
    {
      image: '/images/service-1.svg',

      title: 'الاستزراع السمكي المستدام',
      description: `نلتــزم بتوفيــــر بيئــة طبيعيــة وصحــية لتربيــة الأسمــاك، مـن خـــلال استخـدام أحدث تقنيــات الاستزراع السمكي المستـــدام، مما يضمن نموًا صحيًا للأسماك وجودة عالية للمنتجات.`
    },
    {
      image: '/images/service-2.svg',

      title: 'توريد الأسماك والمنتجات البحرية الطازجة',
      description: `نقدم مجـموعــة متنوعـــة من الأسماك الطازجة والمأكولات البحـــرية عاليـة الجودة لتلبية احتياجــات الأســواق المحلـــية والعالميـــة، مع ضمــان أفضــل معايير الحفظ والنقل.
`
    },
    {
      image: '/images/service-3.svg',

      title: 'تجهيز وتعبئة المنتجات البحرية',
      description: `نوفر خدمات تجهيز الأسمـــاك وتعبئتــها وفـــق أعلـــى معايير السلامة الغذائية، مع إمكانيـة التقــطــيع والتغلــيف حســـــب متطلبات العملاء للحفاظ على نضارة المنتج.`
    },
    {
      image: '/images/service-4.svg',

      title: 'توفير الزريعة عالية الجودة',
      description: `ندعم مزارع الأسماك الأخرى من خــلال توفيـر زريعة الأسماك ذات الجـــودة الممتـــازة، ممــا يساعد على تعزيــز الإنتـاج وتحقيق أقصى استفـــادة من الموارد الطبيعية.
`
    }
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
}
