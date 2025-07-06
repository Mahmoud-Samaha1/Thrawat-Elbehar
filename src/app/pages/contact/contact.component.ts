import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { SweetalertService } from '../../shared/services/sweetalert.service';
import { HomePageService } from '../home/home-page.service';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from "../../shared-ui/map/map.component";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule, ReactiveFormsModule, CommonModule, GoogleMapsModule, MapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private destroy$ = new Subject<void>();
  _langService = inject(LangService)
  _http = inject(HttpClient)
  _dataService = inject(HomePageService)
  _SweetalertService = inject(SweetalertService)
  _fb = inject(FormBuilder)
  url: string = environment.apiUrl
  endPoint: string = "API/Contactus/Post"
  footerEndPoint: string = "API/WebsiteData/Get"
  feedbackForm: FormGroup;
  submitted = false;
  contactForm: ContactForm = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  }

  constructor() {
    this.feedbackForm = this._fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^((\+966)?(5)[0-9]{8})$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['']
    });
  }
  get formControls() {
    return this.feedbackForm.controls;
  }
  visitorsMessagesSubmit() {
    this._http.post<any>(`${this.url}${this.endPoint}`, this.feedbackForm.value).subscribe(
      (res) => {
        console.log(res);

        if (res.success == true) {
          this.feedbackForm.reset()
          this._SweetalertService.toastDoneWithMessage('Email Sent Successfully')

        } else {
          this.feedbackForm.reset()
          this._SweetalertService.toastErrorWithMessage(`Email did n't Send `)

        }
      }
    )
  }
}
interface ContactForm {
  name: string,
  phone: string,
  email: string,
  subject: string,
  message: string,
}
