import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, Input, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { websiteDataModel } from '../../../models/websiteData.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterContentInit {
  logo: string = "/images/white-logo.png";
  email!: string
  @Input() websiteData!: websiteDataModel[]
  emailFormSubmit(emailForm: NgForm) { }
  constructor() {
  }
  ngAfterContentInit(): void {

  }
}
