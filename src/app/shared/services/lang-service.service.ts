import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  _lang = signal<string>(localStorage.getItem('appLanguage') || 'ar');
  lang = this._lang.asReadonly();
  constructor(private translateService: TranslateService) {
    const savedLang = localStorage.getItem('appLanguage') || 'ar';
    translateService.setDefaultLang(this.lang());
    translateService.use(this.lang());
  }

  switchLanguage(lang: string) {
    this._lang.set(lang);
    this.translateService.use(lang);
    localStorage.setItem('appLanguage', lang);
  }
  updateDirection(lang: string) {
    const html = document.querySelector('html') as HTMLElement;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
  }
  getCurrentLangSignal() {
    return this.lang;
  }
}
