import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/auth/welcome/welcome.component').then(m => m.WelcomeComponent),
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      }
    ],
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about.component").then(m => m.AboutComponent)
  },
  {
    path: "services",
    loadComponent: () => import("./pages/services/services.component").then(m => m.ServicesComponent)
  },

  { path: '**', redirectTo: '' },
];
