import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translateService: TranslateService) {
    const savedLang = localStorage.getItem('appLanguage') || 'ar';
    translateService.setDefaultLang(savedLang);
    translateService.use(savedLang);
  }

  switchLanguage(lang: string) {
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
}
