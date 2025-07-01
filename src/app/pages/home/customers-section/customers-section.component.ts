import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';
import { customerSectionModel } from '../../../models/customerSection.model';
import { HttpClient } from '@angular/common/http';
import { LangService } from '../../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-customers-section',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './customers-section.component.html',
  styleUrl: './customers-section.component.scss'
})
export class CustomersSectionComponent implements OnInit {
  private destroy$ = new Subject<void>();
  url: string = environment.apiUrl
  endPoint: string = "API/Clients/Get"
  customersSectionData!: customerSectionModel[]
  _http = inject(HttpClient)
  _langService = inject(LangService)

  getServicesSectionData() {
    return this._http.get<customerSectionModel[]>(`${this.url}${this.endPoint}`)
      .subscribe(
        res => {
          this.customersSectionData = res.filter(customer => customer.ShowInHome)
          console.log(this.customersSectionData);
        });
  }
  customOptions: OwlOptions;

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
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getServicesSectionData(); // ⬅️ أعد جلب البيانات
      });
  }
}
