import { Component, inject, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { LoaderService } from '../../shared/services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class LoaderComponent implements OnInit {
  _loaderService = inject(LoaderService)
  ngOnInit(): void {

  }

}
