import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { newsSectionModel } from '../../../models/newsSection.model';
import { NewsServiceService } from '../news-service.service';
import { LangService } from '../../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent {
  _newsService = inject(NewsServiceService)
  url: string = environment.apiUrl
  endPoint: string = "API/News/Get"
  newsSectionData!: newsSectionModel[]
  _langService = inject(LangService)
  private destroy$ = new Subject<void>();

  getNewsSectionData() {
    return this._newsService.getNews<newsSectionModel[]>(this.url, this.endPoint).subscribe(res => { this.newsSectionData = res; });
  }
  ngOnInit(): void {

    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getNewsSectionData();
      });

  }
}
