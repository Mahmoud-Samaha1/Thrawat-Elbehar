import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared-ui/components/footer/footer.component";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

}
