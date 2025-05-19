
import { HttpInterceptorFn } from '@angular/common/http';
import { signal } from '@angular/core';

let lang = signal<string>("ar");
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    headers: req.headers.append("Accept-Language", lang())
  })
  return next(req)
}
