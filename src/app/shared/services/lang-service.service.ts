import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  currnetlang = localStorage.getItem("appLanguage");
  langChanged$ = new BehaviorSubject<string | null>(localStorage.getItem("appLanguage"));

  constructor(private _translateService: TranslateService) {
    this._translateService.setDefaultLang(localStorage.getItem("appLanguage")!);
    this._translateService.use(localStorage.getItem("appLanguage")!);
  }

  switchLanguage(lang: string) {
    localStorage.setItem('appLanguage', lang);
    this._translateService.use(localStorage.getItem("appLanguage")!);
    this.updateDirection(lang)
    this.langChanged$.next(lang);
  }
  updateDirection(lang: string | null) {
    const html = document.querySelector('html') as HTMLElement;
    // let newsBgLtr = document.querySelector('.news-bg') as HTMLElement;
    if (lang == 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      // newsBgLtr.classList.remove("news-bg-ltr")

    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      // newsBgLtr.classList.add("news-bg-ltr")
    }
  }
}
