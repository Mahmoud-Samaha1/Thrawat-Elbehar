import { Component, input } from '@angular/core';
import { aboutSectionModel } from '../../../models/aboutSection.model';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {
  visionSectionData = input<aboutSectionModel[]>([])

}
