import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageService } from '../../../pages/home/home-page.service';
import { websiteDataModel } from '../../../models/websiteData.model';
import { environment } from '../../../../environments/environment';
import { LangService } from '../../../shared/services/lang-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  _langService = inject(LangService)
  _dataService = inject(HomePageService)
  url: string = environment.apiUrl
  headerEndPoint: string = "API/WebsiteData/Get"
  headerData!: websiteDataModel[]
  getHeaderData() {
    this._dataService.getData<websiteDataModel[]>(this.url, this.headerEndPoint).subscribe(res => this.headerData = res)
  }
  ngOnInit(): void {
    this.getHeaderData()
  }
  changeLang() {
    if (this._langService.langChanged$.value == 'ar') {
      this._langService.switchLanguage("en")
    } else {
      this._langService.switchLanguage('ar')
    }
  }
}
