import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, AboutSectionComponent, ServicesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
