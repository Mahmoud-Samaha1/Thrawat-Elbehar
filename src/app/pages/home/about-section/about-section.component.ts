import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LangService } from '../../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/http/api.service';
import { aboutSectionModel } from '../../../models/aboutSection.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../about/about.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  url: string = environment.apiUrl
  endPoint: string = "API/AboutUs/Get"
  aboutSectionData: aboutSectionModel[] = []
  _http = inject(HttpClient)
  _apiService = inject(ApiService)
  _aboutService = inject(AboutService)
  _langService = inject(LangService)
  // ____________________________________
  getAboutSectionData() {
    return this._aboutService.getAboutData().subscribe(res => {
      this.aboutSectionData = res;

    })
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAboutSectionData();
      });




    this.getAboutSectionData()
  }
  ngOnDestroy(): void {

  }
}
