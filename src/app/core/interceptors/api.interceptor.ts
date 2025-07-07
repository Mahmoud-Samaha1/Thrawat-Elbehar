
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector, signal } from '@angular/core';
import { LangService } from '../../shared/services/lang-service.service';
import { finalize } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const injector = inject(Injector)
  let _loaderService = inject(LoaderService)
  const _langService = injector.get(LangService);

  _loaderService.showLoader()

  const clonedReq = req.clone({
    headers: req.headers.append("Accept-Language", _langService.langChanged$.value!)
  })

  return next(clonedReq).pipe(
    finalize(() => _loaderService.hideLoader())
  )
}
