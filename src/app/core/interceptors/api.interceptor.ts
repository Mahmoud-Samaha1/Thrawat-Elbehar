
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector, signal } from '@angular/core';
import { LangService } from '../../shared/services/lang-service.service';

// let lang = signal<string>("ar");

let injectorRef: Injector;

export function setInterceptorInjector(injector: Injector) {
  injectorRef = injector;
}
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const langService = injectorRef.get(LangService);
  const lang = langService.getCurrentLangSignal();
  req = req.clone({
    headers: req.headers.append("Accept-Language", lang())
  })
  return next(req)
}
