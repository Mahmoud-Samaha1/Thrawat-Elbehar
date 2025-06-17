import { Component, input } from '@angular/core';
import { aboutSectionModel } from '../../../models/aboutSection.model';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  membersSectionData = input<aboutSectionModel[]>([])
}
