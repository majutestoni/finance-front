import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'tipoConta',
  standalone: true
})
export class TipoContaPipe implements PipeTransform {

  private tipos: Record<number, string> = {
    0: 'Outros',
    1: 'Geral',
    2: 'Alimentação'
  };

  transform(value: number): string {
    return this.tipos[value] ?? '';
  }
}