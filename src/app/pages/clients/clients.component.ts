import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { customerSectionModel } from '../../models/customerSection.model';
import { HttpClient } from '@angular/common/http';
import { LangService } from '../../shared/services/lang-service.service';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TranslateModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {


  url: string = environment.apiUrl
  endPoint: string = "API/Clients/Get"
  _http = inject(HttpClient)
  _langService = inject(LangService)
  customersSectionData!: customerSectionModel[]
  private destroyRef = inject(DestroyRef);

  getClientsData() {
    return this._http.get<customerSectionModel[]>(`${this.url}${this.endPoint}`)
      .subscribe(
        res => {
          this.customersSectionData = res
        });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getClientsData();
      });
  }
}
