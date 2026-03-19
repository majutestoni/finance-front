import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('Finance');

  navItems = [
    { path: '/home', label: 'Home' },
    { path: '/movimento-financeiro', label: 'Adicionar lançamento' },
    { path: '/contas', label: 'Contas financeiras' },
    { path: '/categorias', label: 'Categorias' },
    { path: '/usuario', label: 'Usuário' }
  ];

}