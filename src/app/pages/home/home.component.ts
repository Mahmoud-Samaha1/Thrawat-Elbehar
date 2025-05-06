import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { CustomersSectionComponent } from "./customers-section/customers-section.component";
import { NewsSectionComponent } from "./news-section/news-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, AboutSectionComponent, ServicesSectionComponent, CustomersSectionComponent, NewsSectionComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
