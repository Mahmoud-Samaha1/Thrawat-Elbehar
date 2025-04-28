import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
