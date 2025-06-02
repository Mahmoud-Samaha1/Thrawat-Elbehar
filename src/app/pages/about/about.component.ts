import { Component, OnInit } from '@angular/core';
import { AboutHeroSectionComponent } from "./about-hero-section/about-hero-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutHeroSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem("appLanguage", "ar")
  }
}
