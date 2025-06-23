import { Component, inject, input, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { aboutSectionModel } from '../../../models/aboutSection.model';
import { Subject, takeUntil } from 'rxjs';
import { LangService } from '../../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-hero-section.component.html',
  styleUrl: './about-hero-section.component.scss'
})
export class AboutHeroSectionComponent implements OnInit {

  private destroy$ = new Subject<void>();
  _aboutService = inject(AboutService)

  heroSectionData = input<aboutSectionModel[]>([])
  ngOnInit(): void {

  }
}
