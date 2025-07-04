import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from '../../../shared/services/lang-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {
  _langService = inject(LangService)
  // currentLang: string | null = localStorage.getItem("appLanguage");
  currentLang = this._langService.langChanged$;

  constructor() {

  }
  ngOnInit(): void {
    this._langService.updateDirection(localStorage.getItem("appLanguage"))
  }

  changeLang(language: string) {
    this._langService.switchLanguage(language)
    this.currentLang.next(language)
    let newsBgLtr = document.querySelector('.news-bg') as HTMLElement;
    if (language == 'ar') {
      newsBgLtr.classList.remove("news-bg-ltr")
    } else {
      newsBgLtr.classList.add("news-bg-ltr")
    }
  }

}
