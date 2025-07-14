import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { LangService } from '../../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/http/api.service';
import { aboutSectionModel } from '../../../models/aboutSection.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../about/about.service';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent implements OnInit, OnDestroy {

  url: string = environment.apiUrl
  endPoint: string = "API/AboutUs/Get"
  aboutSectionData: aboutSectionModel[] = []
  _http = inject(HttpClient)
  _apiService = inject(ApiService)
  _aboutService = inject(AboutService)
  _langService = inject(LangService)
  private destroyRef = inject(DestroyRef);

  // ____________________________________
  getAboutSectionData() {
    return this._aboutService.getAboutData().subscribe(res => {
      this.aboutSectionData = res;

    })
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getAboutSectionData();
      });




    // this.getAboutSectionData()
  }
  ngOnDestroy(): void {

  }
}
