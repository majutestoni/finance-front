import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.HomeComponent)
  },
  {
    path: 'contas',
    loadComponent: () =>
      import('./pages/contas/contas')
        .then(m => m.ContasComponent)
  },
    {
    path: 'categorias',
    loadComponent: () =>
      import('./pages/categorias/categorias')
        .then(m => m.CategoriaComponent)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];