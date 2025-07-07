import { Component, computed, inject, OnInit } from '@angular/core';
import { FooterComponent } from "../../../shared-ui/components/footer/footer.component";
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { websiteDataModel } from '../../../models/websiteData.model';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FooterComponent, TranslateModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  private destroy$ = new Subject<void>();

  url: string = environment.apiUrl
  endPoint: string = "API/WebsiteData/Get"
  _dataService = inject(HomePageService)
  websiteData = computed(() => this._dataService.websiteData())
  _http = inject(HttpClient)
  _langService = inject(LangService)
  // getWebsiteSectionData() {
  //   return this._http.get<websiteDataModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.websiteData = res; console.log(this.websiteData); });
  // }

}
