import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, inject, Input, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { websiteDataModel } from '../../../models/websiteData.model';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SweetalertService } from '../../../shared/services/sweetalert.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterContentInit {
  logo: string = "/images/white-logo.png";
  email!: string;
  _http = inject(HttpClient)
  _SweetalertService = inject(SweetalertService)
  url: string = environment.apiUrl
  endPoint: string = "API/Contactus/Post"
  @Input() websiteData!: websiteDataModel[]
  emailFormSubmit(emailForm: NgForm) {
    console.log(this.email);
    this._http.post<any>(`${this.url}${this.endPoint}`, {
      "Name": "text",
      "Phone": "text",
      "Email": this.email,
      "Subject": "text",
      "Message": "textarea"
    }).subscribe(
      (res) => {
        console.log(res);

        if (res.success == true) {
          this.email = ''
          this._SweetalertService.toastDoneWithMessage('Email Sent Successfully')

        } else {
          this.email = ''
          this._SweetalertService.toastErrorWithMessage(`Email did n't Send `)

        }
      }
    )
  }
  constructor() {
  }
  ngAfterContentInit(): void {

  }
}
