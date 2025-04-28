import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from '../../../shared/services/lang-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  langService = inject(LangService)
  currentLang: string = localStorage.getItem("appLanguage") || "ar"

  changeLang(language: string) {
    this.langService.switchLanguage(language)
    this.updateDirection(language)
    this.currentLang = language
  }
  updateDirection(lang: string) {
    this.langService.updateDirection(lang)
  }
}
