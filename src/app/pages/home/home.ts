import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ComponentsModule } from '../../shared/compoents.module';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  account: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, ComponentsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  totalBalance = 15750.5;
  totalIncome = 8500;
  totalExpenses = 3250;

  recentTransactions: Transaction[] = [
    {
      id: '1',
      description: 'Salário - Janeiro',
      amount: 5000,
      type: 'income',
      category: 'Salário',
      account: 'Conta Corrente',
      date: '2026-01-20'
    },
    {
      id: '2',
      description: 'Freelance - Projeto Web',
      amount: 3500,
      type: 'income',
      category: 'Freelance',
      account: 'Conta Corrente',
      date: '2026-01-18'
    },
    {
      id: '3',
      description: 'Supermercado',
      amount: 450,
      type: 'expense',
      category: 'Alimentação',
      account: 'Conta Corrente',
      date: '2026-01-17'
    },
    {
      id: '4',
      description: 'Conta de Luz',
      amount: 180,
      type: 'expense',
      category: 'Contas',
      account: 'Conta Corrente',
      date: '2026-01-15'
    },
    {
      id: '5',
      description: 'Assinatura Netflix',
      amount: 45.9,
      type: 'expense',
      category: 'Entretenimento',
      account: 'Cartão de Crédito',
      date: '2026-01-10'
    }
  ];
}
