import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from "../../../shared-ui/components/footer/footer.component";
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { websiteDataModel } from '../../../models/websiteData.model';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit {
  url: string = environment.apiUrl
  endPoint: string = "API/WebsiteData/Get"
  websiteData!: websiteDataModel[]
  _http = inject(HttpClient)
  getWebsiteSectionData() {
    return this._http.get<websiteDataModel[]>(`${this.url}${this.endPoint}`).subscribe(res => { this.websiteData = res; console.log(this.websiteData); });
  }
  ngOnInit(): void {
    this.getWebsiteSectionData()
  }
}
