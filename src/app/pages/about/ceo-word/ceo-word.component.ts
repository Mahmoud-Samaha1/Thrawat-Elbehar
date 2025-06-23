import { Component, input } from '@angular/core';
import { aboutSectionModel } from '../../../models/aboutSection.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ceo-word',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './ceo-word.component.html',
  styleUrl: './ceo-word.component.scss'
})
export class CeoWordComponent {
  ceoWordSectionData = input<aboutSectionModel[]>([])

}
