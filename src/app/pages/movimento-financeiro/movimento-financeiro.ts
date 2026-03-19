import { Component } from '@angular/core';
import { ComponentsModule } from '../../shared/compoents.module';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';
import { TipoMovimento } from '../../core/models/movimento-financeiro.model';
import { TipoMovimentoPipe } from '../../shared/pipes/tipo-movimento-pipe-pipe';
import { FORM_COMPONENTS } from '../../shared/components/form/form.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movimento-financeiro',
  imports: [
    ComponentsModule,
    MaterialModule,
    CommonModule,
    TipoMovimentoPipe,
    ...FORM_COMPONENTS,
    FormsModule,
  ],
  templateUrl: './movimento-financeiro.html',
  styleUrl: './movimento-financeiro.scss',
})
export class MovimentoFinanceiro {
  tiposMovimento = [TipoMovimento.ENTRADA, TipoMovimento.SAIDA, TipoMovimento.SAIDA_INVESTIMENTO];
  TipoMovimento = TipoMovimento;
  
  formData = {
    description: '',
    amount: '',
    type: TipoMovimento.SAIDA,
    category: '',
    account: '',
    date: new Date().toISOString().split('T')[0],
  };

  categories = [
    { value: '', label: 'Selecione uma categoria', disabled: true },
    { value: 'salario', label: 'Salário' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'investimentos', label: 'Investimentos' },
    { value: 'alimentacao', label: 'Alimentação' },
    { value: 'transporte', label: 'Transporte' },
    { value: 'contas', label: 'Contas' },
  ];

  accounts = [
    { value: '', label: 'Selecione uma conta', disabled: true },
    { value: 'corrente', label: 'Conta Corrente' },
    { value: 'poupanca', label: 'Conta Poupança' },
  ];

  setType(type: TipoMovimento) {
    this.formData.type = type;
  }

  onSubmit() {
    console.log('Criando movimentação:', this.formData);
  }
}
