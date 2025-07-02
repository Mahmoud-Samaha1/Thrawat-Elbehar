import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor() { }
  _http = inject(HttpClient)
  getNews<T>(url: string, endPoint: string) {
    return this._http.get<T>(`${url}${endPoint}`)
  }
}
