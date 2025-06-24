import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
