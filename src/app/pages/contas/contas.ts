import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conta, TipoConta } from '../../core/models/conta.model';
import { MaterialModule } from '../../shared/material.module';
import { TipoContaPipe } from "../../shared/pipes/tipo-conta.pipe";
import { ComponentsModule } from '../../shared/compoents.module';

@Component({
  selector: 'app-contas',
  standalone: true,
  imports: [CommonModule, MaterialModule, TipoContaPipe, ComponentsModule],
  templateUrl: './contas.html',
  styleUrls: ['./contas.scss'],
})
export class ContasComponent {
[x: string]: any;
  contas: Conta[] = [
    { apelido: 'Conta 1', numero: 123, saldo: 100, tipoConta: TipoConta.GERAL },
    { apelido: 'Conta 2', numero: 222, saldo: 100, tipoConta: TipoConta.ALIMENTACAO },
  ];

  public defineIcon(tipoConta: TipoConta): string {
    switch (tipoConta) {
      case TipoConta.GERAL:
        return 'wallet';
      case TipoConta.ALIMENTACAO:
        return 'food_bank';
      case TipoConta.OUTROS:
        return 'payments';
      default:
        return 'payments';
    }
  }
}
