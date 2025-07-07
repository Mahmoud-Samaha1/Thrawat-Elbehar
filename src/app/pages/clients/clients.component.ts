import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { customerSectionModel } from '../../models/customerSection.model';
import { HttpClient } from '@angular/common/http';
import { LangService } from '../../shared/services/lang-service.service';
import { environment } from '../../../environments/environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  private destroy$ = new Subject<void>();

  url: string = environment.apiUrl
  endPoint: string = "API/Clients/Get"
  _http = inject(HttpClient)
  _langService = inject(LangService)
  customersSectionData!: customerSectionModel[]
  getServicesSectionData() {
    return this._http.get<customerSectionModel[]>(`${this.url}${this.endPoint}`)
      .subscribe(
        res => {
          this.customersSectionData = res
        });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getServicesSectionData(); // ⬅️ أعد جلب البيانات
      });
  }
}
