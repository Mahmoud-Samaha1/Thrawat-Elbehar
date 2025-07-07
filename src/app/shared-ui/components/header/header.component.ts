import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageService } from '../../../pages/home/home-page.service';
import { websiteDataModel } from '../../../models/websiteData.model';
import { environment } from '../../../../environments/environment';
import { LangService } from '../../../shared/services/lang-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private destroy$ = new Subject<void>();
  _langService = inject(LangService)
  _dataService = inject(HomePageService)
  url: string = environment.apiUrl
  headerEndPoint: string = "API/WebsiteData/Get"
  headerData = computed(() => this._dataService.websiteData())
  // getHeaderData() {
  //   this._dataService.getData<websiteDataModel[]>(this.url, this.headerEndPoint).subscribe(res => this.headerData = res)
  // }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this._dataService.getWebsiteData()
      });

  }
  changeLang() {
    if (this._langService.langChanged$.value == 'ar') {
      this._langService.switchLanguage("en")
    } else {
      this._langService.switchLanguage('ar')
    }
  }
}
