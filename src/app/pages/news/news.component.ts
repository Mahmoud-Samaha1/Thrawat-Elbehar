import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { servicesSectionModel } from '../../models/servicesSection.model';
import { LangService } from '../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../shared-ui/components/footer/footer.component';
import { HeaderComponent } from '../../shared-ui/components/header/header.component';

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
  endPoint: string = "API/Services/Get"
  servicesSectionData!: servicesSectionModel[]
  _langService = inject(LangService)
  getServicesSectionData() {
    return this._http.get<servicesSectionModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.servicesSectionData = res; });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getServicesSectionData();
      });
    // this.getServicesSectionData()
  }
}
