import { Pipe, PipeTransform } from '@angular/core';
import { TipoMovimento, tipoMovimentoToString } from '../../core/models/movimento-financeiro.model';

@Pipe({
  name: 'tipoMovimentoPipe',
  standalone: true
})
export class TipoMovimentoPipe implements PipeTransform {

  transform(value: TipoMovimento): string {
    return tipoMovimentoToString(value);
  }

}