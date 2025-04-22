import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule, RouterOutlet, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage = '';
  loginForm!: FormGroup;

  constructor(
    private _router: Router,
    private _fb: FormBuilder

  ) {
    this.loginForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  get userName() {
    return this.loginForm.get('userName')
  }
  get password() {
    return this.loginForm.get('password')
  }


}
