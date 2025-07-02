import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { newsSectionModel } from '../../../models/newsSection.model';
import { Subject, takeUntil } from 'rxjs';
import { LangService } from '../../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent implements OnInit {
  private destroy$ = new Subject<void>();
  _langService = inject(LangService)

  url: string = environment.apiUrl
  endPoint: string = "API/News/Get"
  newsSectionData!: newsSectionModel[]
  _http = inject(HttpClient)
  getNewsSectionData() {
    return this._http.get<newsSectionModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.newsSectionData = res; console.log(this.newsSectionData); });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getNewsSectionData();
      });
    // this.getNewsSectionData()
  }
  customOptions: OwlOptions;
  defaultData = [
    {
      image: '/images/news-1.png',

      title: 'الاستزراع السمكي المستدام',
      description: `شركة "ثروات البحار السعودية للأسماك" هي إحدى الشركات التابعة لـ"شركة ثروات القابضة" في المملكة العربية `
    },

    {
      image: '/images/news-1.png',

      title: 'الاستزراع السمكي المستدام',
      description: `شركة "ثروات البحار السعودية للأسماك" هي إحدى الشركات التابعة لـ"شركة ثروات القابضة" في المملكة العربية `
    },

    {
      image: '/images/news-1.png',

      title: 'الاستزراع السمكي المستدام',
      description: `شركة "ثروات البحار السعودية للأسماك" هي إحدى الشركات التابعة لـ"شركة ثروات القابضة" في المملكة العربية `
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
}

