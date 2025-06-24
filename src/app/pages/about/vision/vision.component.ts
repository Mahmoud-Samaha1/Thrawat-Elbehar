import { Component, input } from '@angular/core';
import { aboutSectionModel } from '../../../models/aboutSection.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {
  visionSectionData = input<aboutSectionModel[]>([])

}
