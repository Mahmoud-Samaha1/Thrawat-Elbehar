import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../interfaces/ServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  add(api: string, url: string, data: any): Observable<ServiceResponse<any>> {
    return this.http.post<ServiceResponse<any>>(`${url}${api}`, data)
  }
  get<T>(url: string, api: string,): Observable<ServiceResponse<T>> {
    return this.http.get<ServiceResponse<T>>(`${url}${api}`);
  }
  getOrByParams<T>(url: string, endPoint: string, params?: Object | null,): Observable<ServiceResponse<T>> {
    let options = {
      params: this._buildHttpPrams(params || {})
    }
    return this.http.get<ServiceResponse<T>>(`${url}${endPoint}`, options);
  }
  getByStringParam<T>(url: string, endPoint: string, stringParam: string | null): Observable<ServiceResponse<T>> {
    return this.http.get<ServiceResponse<T>>(`${url}${endPoint}/${stringParam}`);
  }
  putByStringParam<T>(url: string, endPoint: string, stringParam: string | null): Observable<ServiceResponse<T>> {
    return this.http.put<ServiceResponse<T>>(`${url}${endPoint}/${stringParam}`, null);
  }
  postByStringParam<T>(url: string, endPoint: string, stringParam: string | null): Observable<ServiceResponse<T>> {
    return this.http.post<ServiceResponse<T>>(`${url}${endPoint}/${stringParam}`, null);
  }
  put<T>(url: string, endPoint: string, body: any, params?: Object | null): Observable<ServiceResponse<T>> {
    let options = {
      params: this._buildHttpPrams(params || {})
    }
    return this.http.put<ServiceResponse<T>>(`${url}${endPoint}`, body, options);
  }
  post<T>(url: string, endPoint: string, body?: any, isFormData: boolean = false, params?: Object | null): Observable<ServiceResponse<T>> {
    let bodyData: any = isFormData ? this._jsonToFormData(body) : body;
    let options = {}
    if (params != null) {
      options = { params: this._buildHttpPrams(params) }
    }
    return this.http.post<ServiceResponse<T>>(`${url}${endPoint}`, bodyData);
  }
  delete<T>(url: string, endPoint: string, body: any, params?: Object | null): Observable<ServiceResponse<T>> {
    return this.http.delete<ServiceResponse<T>>(`${url}${endPoint}`, { params: params ? this._httpParams(params) : undefined, body: body });
  }
  private _httpParams(params: Object): HttpParams {
    const httpParams = new HttpParams();
    Object.keys(params).forEach((k, i) => {
      var d = Object.values(params!)[i];
      httpParams.append(k, d)

    });
    return httpParams;
  }
  private _buildHttpPrams(params: Object): HttpParams {
    let httpParams = new HttpParams();
    if (params != null) {
      Object.keys(params).forEach((k, i) => {
        var d = Object.values(params!)[i];
        httpParams = httpParams.append(k, d)
      });
    }
    return httpParams;
  }
  private _jsonToFormData(data: any) {
    const formData = new FormData();
    this._buildFormData(formData, data);
    return formData;
  }
  private _buildFormData(formData: FormData, data: any, parentKey?: any) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        let value: string = '';
        if (key.match(/\d+/g)) {
          value = `[${key}]`
        }
        else {
          value = `.${key}`
        }
        this._buildFormData(formData, data[key], parentKey ? `${parentKey}${value}` : key);
      });
    }
    else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }
  changeActivationStatus(api: string, url: string, model: any): Observable<ServiceResponse<boolean>> {
    return this.http.put<ServiceResponse<boolean>>(`${url}${api}`, model)
  }
  downloadFileUsingStringParam(method: string, url: string, endPoint: string, stringParam: string): Observable<HttpEvent<Blob>> {
    return this.http.request(new HttpRequest(method, `${url}${endPoint}/${stringParam}`, { responseType: 'blob' }))
  }
  downloadFileUsingParams(method: string, url: string, endPoint: string, params?: Object | null): Observable<HttpEvent<Blob>> {
    let options = {
      params: this._buildHttpPrams(params || {})
    }
    return this.http.request(new HttpRequest(method, `${url}${endPoint}`, { responseType: 'blob' }, options))
  }
  httpOptions = {
    'responseType': 'arraybuffer' as 'json'
  };
  downloadPdfFile(url: string, endPoint: string) {
    return this.http.post<ArrayBuffer>(`${url}${endPoint}`, null, this.httpOptions)
  }
  downloadFile(method: string, url: string, endPoint: string): Observable<HttpEvent<Blob>> {
    return this.http.request(new HttpRequest(method, `${url}${endPoint}`, { reportProgress: true, responseType: 'blob' }));
  }

}
