import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { servicesSectionModel } from '../../models/servicesSection.model';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
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
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getServicesSectionData();
      });
    // this.getServicesSectionData()
  }
}
