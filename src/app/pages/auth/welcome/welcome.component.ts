import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeOutAnimation } from 'angular-animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class WelcomeComponent implements OnInit {
  isVisible: boolean = true;
  _router = inject(Router)
  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this._router.navigate(['/home'])
    }, 3500);
  }


}
