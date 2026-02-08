import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarOpen = true;

  navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/accounts', label: 'Contas Financeiras' },
    { path: '/transactions', label: 'Movimentações' },
    { path: '/categories', label: 'Categorias' },
    { path: '/create-user', label: 'Criar Usuário' }
  ];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
