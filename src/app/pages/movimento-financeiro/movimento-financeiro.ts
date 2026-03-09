import { Component } from '@angular/core';
import { ComponentsModule } from '../../shared/compoents.module';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';
import { TipoMovimento } from '../../core/models/movimento-financeiro.model';

@Component({
  selector: 'app-movimento-financeiro',
  imports: [ComponentsModule, MaterialModule, CommonModule],
  templateUrl: './movimento-financeiro.html',
  styleUrl: './movimento-financeiro.scss',
})
export class MovimentoFinanceiro {
  tiposMovimento = [TipoMovimento.ENTRADA, TipoMovimento.SAIDA, TipoMovimento.SAIDA_INVESTIMENTO];
}
