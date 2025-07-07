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
  {
    path: "service/:id",
    loadComponent: () => import("./pages/services/service-details/service-details.component").then(m => m.ServiceDetailsComponent)
  },
  {
    path: "news",
    loadComponent: () => import("./pages/news/news.component").then(m => m.NewsComponent)
  },
  {
    path: "news/:id",
    loadComponent: () => import("./pages/news/news-details/news-details.component").then(m => m.NewsDetailsComponent)
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/contact.component").then(m => m.ContactComponent)
  },
  {
    path: "clients",
    loadComponent: () => import("./pages/clients/clients.component").then(m => m.ClientsComponent)
  },

  { path: '**', redirectTo: '' },
];
