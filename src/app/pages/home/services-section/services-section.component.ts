import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { servicesSectionModel } from '../../../models/servicesSection.model';
import { LangService } from '../../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent implements OnInit {
  url: string = environment.apiUrl
  endPoint: string = "API/Services/Get"
  servicesSectionData!: servicesSectionModel[]
  _http = inject(HttpClient)
  _langService = inject(LangService)
  private destroyRef = inject(DestroyRef);

  getServicesSectionData() {
    return this._http.get<servicesSectionModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.servicesSectionData = res; });
  }
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
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getServicesSectionData();
      });
    // this.getServicesSectionData();
  }
}
