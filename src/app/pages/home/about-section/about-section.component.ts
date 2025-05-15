import { Component, inject, OnInit } from '@angular/core';
import { LangService } from '../../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/http/api.service';
import { aboutSectionModel } from '../../../models/aboutSection.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent implements OnInit {

  url: string = environment.apiUrl
  endPoint: string = "API/AboutUs/Get"
  aboutSectionData!: aboutSectionModel[]
  _http = inject(HttpClient)
  _apiService = inject(ApiService)
  getAboutSectionData() {
    return this._http.get<any>(`${this.url}${this.endPoint}`).subscribe(res => this.aboutSectionData = res);
  }
  ngOnInit(): void {
    this.getAboutSectionData()
  }
}
