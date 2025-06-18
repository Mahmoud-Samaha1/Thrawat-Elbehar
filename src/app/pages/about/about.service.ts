import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { aboutSectionModel } from '../../models/aboutSection.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  _http = inject(HttpClient)
  url: string = environment.apiUrl
  endPoint: string = "API/AboutUs/Get"
  constructor() {

  }
  getAboutData() {
    return this._http.get<any>(`${this.url}${this.endPoint}`)
  }
  getWebsiteData() {

  }
}
