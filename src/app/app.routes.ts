import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'contas',
    loadComponent: () => import('./pages/contas/contas').then((m) => m.ContasComponent),
  },
  {
    path: 'categorias',
    loadComponent: () => import('./pages/categorias/categorias').then((m) => m.CategoriaComponent),
  },
  {
    path: 'usuario',
    loadComponent: () => import('./pages/usuario/usuario').then((m) => m.UsuarioComponent),
  },
    {
    path: 'movimento-financeiro',
    loadComponent: () => import('./pages/movimento-financeiro/movimento-financeiro').then((m) => m.MovimentoFinanceiro),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
