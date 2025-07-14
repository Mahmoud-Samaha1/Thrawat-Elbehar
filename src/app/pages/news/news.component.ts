import { Component, DestroyRef, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../shared-ui/components/footer/footer.component';
import { HeaderComponent } from '../../shared-ui/components/header/header.component';
import { newsSectionModel } from '../../models/newsSection.model';
import { NewsServiceService } from './news-service.service';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule, RouterModule, DatePipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  _newsService = inject(NewsServiceService)
  url: string = environment.apiUrl
  endPoint: string = "API/News/Get"
  newsSectionData!: newsSectionModel[]
  _langService = inject(LangService)
  private destroyRef = inject(DestroyRef);

  getNewsSectionData() {
    return this._newsService.getNews<newsSectionModel[]>(this.url, this.endPoint).subscribe(res => { this.newsSectionData = res; });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getNewsSectionData();
      });
  }
}
