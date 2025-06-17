import { Component, input } from '@angular/core';
import { aboutSectionModel } from '../../../models/aboutSection.model';

@Component({
  selector: 'app-ceo-word',
  standalone: true,
  imports: [],
  templateUrl: './ceo-word.component.html',
  styleUrl: './ceo-word.component.scss'
})
export class CeoWordComponent {
  ceoWordSectionData = input<aboutSectionModel[]>([])

}
