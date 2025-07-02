import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../shared-ui/components/footer/footer.component';
import { HeaderComponent } from '../../shared-ui/components/header/header.component';
import { newsSectionModel } from '../../models/newsSection.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  private destroy$ = new Subject<void>();
  _http = inject(HttpClient)
  url: string = environment.apiUrl
  endPoint: string = "API/News/Get"
  newsSectionData!: newsSectionModel[]
  _langService = inject(LangService)
  getNewsSectionData() {
    return this._http.get<newsSectionModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.newsSectionData = res; });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getNewsSectionData();
      });
    // this.getServicesSectionData()
  }
}
