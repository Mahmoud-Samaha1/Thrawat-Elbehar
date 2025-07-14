import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "../../pages/home/home.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
