import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { newsSectionModel } from '../../../models/newsSection.model';
import { NewsServiceService } from '../news-service.service';
import { LangService } from '../../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from "../../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../../shared-ui/components/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, TranslateModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent {
  url: string = environment.apiUrl
  endPoint: string = "API/News/Get"
  _newsService = inject(NewsServiceService)
  _http = inject(HttpClient)
  newsDetailsData!: newsSectionModel[]
  _langService = inject(LangService)
  _activateRoute = inject(ActivatedRoute)
  private destroy$ = new Subject<void>();

  getNewsDetailsData() {
    let id = this._activateRoute.snapshot.params['id']
    return this._http.get<newsSectionModel[]>(`${this.url}${this.endPoint}`, { params: { SearchText: id } })
      .subscribe(res => {
        this.newsDetailsData = res; console.log(this.newsDetailsData);
      });
  }
  ngOnInit(): void {

    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getNewsDetailsData();
      });

  }
}
