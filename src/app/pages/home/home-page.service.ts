import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  _http = inject(HttpClient)
  constructor() { }
  getData<T>(url: string, endPoint: string) {
    return this._http.get<T>(`${url}${endPoint}`)
  }
}
