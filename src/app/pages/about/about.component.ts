import { Component, inject, OnInit } from '@angular/core';
import { AboutHeroSectionComponent } from "./about-hero-section/about-hero-section.component";
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { VisionComponent } from "./vision/vision.component";
import { AboutService } from './about.service';
import { aboutSectionModel } from '../../models/aboutSection.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutHeroSectionComponent, HeaderComponent, VisionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor() {

    localStorage.setItem("appLanguage", "ar")
  }
  _aboutService = inject(AboutService)
  aboutSectionData: aboutSectionModel[] = []
  ngOnInit(): void {
    this.getAboutSectionData()
  }
  getAboutSectionData() {
    return this._aboutService.getAboutData().subscribe(res => {
      this.aboutSectionData = res;
      console.log(res);
      console.log(this.aboutSectionData);

    })
  }
}
