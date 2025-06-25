import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { servicesSectionModel } from '../../../models/servicesSection.model';
import { LangService } from '../../../shared/services/lang-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../../shared-ui/components/footer/footer.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  private destroy$ = new Subject<void>();
  _http = inject(HttpClient)
  _router = inject(Router)
  _activateRoute = inject(ActivatedRoute)
  url: string = environment.apiUrl
  endPoint: string = "API/Services/Get"
  servicesDetailsData!: servicesSectionModel[]
  _langService = inject(LangService)
  getServicesDetailsData() {
    let id = this._activateRoute.snapshot.params
    return this._http.get<servicesSectionModel[]>(`${this.url}${this.endPoint}`, { params: { SearchText: '4a8bb653-c217-4359-96d6-ddcd913f1776' } })
      .subscribe(res => {
        this.servicesDetailsData = res; console.log(this.servicesDetailsData);
      });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getServicesDetailsData();
      });
    // this.getServicesDetailsData()
  }

}
