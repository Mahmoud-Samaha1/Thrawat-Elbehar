import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AboutHeroSectionComponent } from "./about-hero-section/about-hero-section.component";
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { VisionComponent } from "./vision/vision.component";
import { AboutService } from './about.service';
import { aboutSectionModel, teamsDataModel } from '../../models/aboutSection.model';
import { ValuesComponent } from "./values/values.component";
import { CeoWordComponent } from "./ceo-word/ceo-word.component";
import { MembersComponent } from "./members/members.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { ContactSectionComponent } from "../home/contact-section/contact-section.component";
import { LangService } from '../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutHeroSectionComponent, HeaderComponent, VisionComponent, ValuesComponent, CeoWordComponent, MembersComponent, FooterComponent, ContactSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',

})
export class AboutComponent {
  constructor() {

    // localStorage.setItem("appLanguage", "ar")
  }
  private destroyRef = inject(DestroyRef);

  _aboutService = inject(AboutService)
  _langService = inject(LangService)
  aboutSectionData: aboutSectionModel[] = []
  teamsData: teamsDataModel[] = []
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getAboutSectionData();
        this.getTeamsData();
      });

  }
  getAboutSectionData() {
    return this._aboutService.getAboutData().subscribe(res => {
      this.aboutSectionData = res;
    })
  }
  getTeamsData() {
    return this._aboutService.getTeamsData().subscribe(res => {
      this.teamsData = res;


    })
  }
}
