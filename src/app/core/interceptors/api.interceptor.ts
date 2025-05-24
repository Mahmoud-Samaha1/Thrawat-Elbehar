
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector, signal } from '@angular/core';
import { LangService } from '../../shared/services/lang-service.service';


export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  req = req.clone({
    headers: req.headers.append("Accept-Language", localStorage.getItem("appLanguage")!)
  })
  return next(req)
}
