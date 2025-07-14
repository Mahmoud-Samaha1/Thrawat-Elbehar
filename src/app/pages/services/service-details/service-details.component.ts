import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { servicesSectionModel } from '../../../models/servicesSection.model';
import { LangService } from '../../../shared/services/lang-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../../shared-ui/components/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule, RouterModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  _http = inject(HttpClient)
  _activateRoute = inject(ActivatedRoute)
  url: string = environment.apiUrl
  endPoint: string = "API/Services/Get"
  servicesDetailsData!: servicesSectionModel[] | undefined
  _langService = inject(LangService)
  private destroyRef = inject(DestroyRef);

  getServicesDetailsData() {
    let id = this._activateRoute.snapshot.params['id']
    return this._http.get<servicesSectionModel[]>(`${this.url}${this.endPoint}`, { params: { SearchText: id } })
      .subscribe(res => {
        this.servicesDetailsData = res;
      });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getServicesDetailsData();
      });
  }

}
