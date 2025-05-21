import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { websiteDataModel } from '../../../models/websiteData.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterContentInit {
  logo: string = "/images/white-logo.png";
  email!: string
  @Input() websiteData!: websiteDataModel[]
  emailFormSubmit() { }
  constructor() {
  }
  ngAfterContentInit(): void {

  }
}
