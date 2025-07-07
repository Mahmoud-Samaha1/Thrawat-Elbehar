import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
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
import { websiteDataModel } from '../../models/websiteData.model';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule, ReactiveFormsModule, CommonModule, GoogleMapsModule, MapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private destroy$ = new Subject<void>();
  _langService = inject(LangService)
  _http = inject(HttpClient)
  _dataService = inject(HomePageService)
  _SweetalertService = inject(SweetalertService)
  _fb = inject(FormBuilder)

  contactData = computed(() => this._dataService.websiteData())
  url: string = environment.apiUrl
  endPoint: string = "API/Contactus/Post"
  contactEndPoint: string = "API/WebsiteData/Get"
  feedbackForm: FormGroup;
  submitted = false;

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
  ngOnInit(): void {
    // this._dataService.getWebsiteData()
  }
  get formControls() {
    return this.feedbackForm.controls;
  }
  // getContactData() {
  //   this._dataService.getData<websiteDataModel[]>(this.url, this.contactEndPoint).subscribe(res => this.contactData = res)
  // }
  visitorsMessagesSubmit() {
    this._http.post<any>(`${this.url}${this.endPoint}`, this.feedbackForm.value).subscribe(
      (res) => {
        console.log(res);

        if (res.success == true) {
          this.feedbackForm.reset()
          this._SweetalertService.toastDoneWithMessage('Your Feedback Sent Successfully')

        } else {
          this.feedbackForm.reset()
          this._SweetalertService.toastErrorWithMessage(`Your Feedback did n't Send `)

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
