import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home')
            .then(m => m.HomeComponent)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
