
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector, signal } from '@angular/core';
import { LangService } from '../../shared/services/lang-service.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  let _langService = inject(LangService)
  req = req.clone({
    headers: req.headers.append("Accept-Language", _langService.langChanged$.value!)
  })
  return next(req)
}
