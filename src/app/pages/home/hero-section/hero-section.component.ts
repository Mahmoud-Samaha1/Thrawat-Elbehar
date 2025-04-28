import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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
export class HeroSectionComponent {
  langService = inject(LangService)
  currentLang: string = localStorage.getItem("appLanguage") || "ar"
  searchValue!: string
  changeLang(language: string) {
    this.langService.switchLanguage(language)
    this.updateDirection(language)
    this.currentLang = language
  }
  updateDirection(lang: string) {
    this.langService.updateDirection(lang)
  }
  onSearchFormSubmit() { }
}
