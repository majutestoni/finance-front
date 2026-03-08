import { Component } from '@angular/core';
import { ComponentsModule } from '../../shared/compoents.module';
import { MaterialModule } from '../../shared/material.module';
import { CategoriaMovimento } from '../../core/models/categoria.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  imports: [ComponentsModule, MaterialModule, CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss',
})
export class CategoriaComponent {

  categoriasEntrada: CategoriaMovimento[] = [
    {denominacao: 'Salário'},
    {denominacao: 'Freelance'},
    {denominacao: 'Investimentos'}
  ]

}
