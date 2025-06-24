import { Component, input, OnInit } from '@angular/core';
import { aboutSectionModel, teamsDataModel } from '../../../models/aboutSection.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {

  membersSectionData = input<teamsDataModel[]>([])

}
