import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, computed, inject, Input, input, OnInit, effect } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { websiteDataModel } from '../../../models/websiteData.model';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SweetalertService } from '../../../shared/services/sweetalert.service';
import { HomePageService } from '../../../pages/home/home-page.service';
import { Subject, takeUntil } from 'rxjs';
import { LangService } from '../../../shared/services/lang-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  private destroy$ = new Subject<void>();
  _langService = inject(LangService)
  logo: string = "/images/white-logo.png";
  user: User = {
    email: ''
  }
  _http = inject(HttpClient)
  _dataService = inject(HomePageService)
  _SweetalertService = inject(SweetalertService)
  url: string = environment.apiUrl
  endPoint: string = "API/NewsSubscribers/Post"
  footerEndPoint: string = "API/WebsiteData/Get"
  footerData = computed(() => this._dataService.websiteData())

  emailFormSubmit(emailForm: NgForm) {

    this._http.post<any>(`${this.url}${this.endPoint}`,
      {
        "Email": this.user.email.trim(),
      }
    ).subscribe(
      (res) => {


        if (res.success == true) {
          this.user.email = ''
          this._SweetalertService.toastDoneWithMessage('Email Sent Successfully')

        } else {
          this.user.email = ''
          this._SweetalertService.toastErrorWithMessage(`Email did n't Send `)

        }
      }
    )
  }
  constructor() {
  }

}
interface User {
  email: string;
}
