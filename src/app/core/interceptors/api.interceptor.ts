
import { HttpInterceptorFn } from '@angular/common/http';

let lang: string = "ar";
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    headers: req.headers.append("Accept-Language", `${lang}`)
  })
  return next(req)
}
