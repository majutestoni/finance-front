import { Component } from '@angular/core';
import { ComponentsModule } from '../../shared/compoents.module';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [ComponentsModule, MaterialModule, CommonModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
})
export class UsuarioComponent {

}
