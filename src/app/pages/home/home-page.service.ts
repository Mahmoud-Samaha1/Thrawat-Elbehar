import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { websiteDataModel } from '../../models/websiteData.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService implements OnInit {
  _http = inject(HttpClient)
  websiteData = signal<websiteDataModel[]>([])
  private url: string = environment.apiUrl
  private websiteDataEndPoint: string = "API/WebsiteData/Get"

  constructor() {

  }
  ngOnInit(): void {

  }
  getData<T>(url: string, endPoint: string) {
    return this._http.get<T>(`${url}${endPoint}`)
  }
  getWebsiteData() {
    return this._http.get<websiteDataModel[]>(`${this.url}${this.websiteDataEndPoint}`).subscribe(res => {
      this.websiteData.set(res);
    }
    )
  }
}
