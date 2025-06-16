import { Component, inject, input, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { aboutSectionModel } from '../../../models/aboutSection.model';

@Component({
  selector: 'app-about-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './about-hero-section.component.html',
  styleUrl: './about-hero-section.component.scss'
})
export class AboutHeroSectionComponent {
  _aboutService = inject(AboutService)
  heroSectionData = input<aboutSectionModel[]>([])

}
