export enum TipoMovimento {
  SAIDA,
  ENTRADA,
  SAIDA_INVESTIMENTO
}

export function tipoMovimentoToString(tipo: TipoMovimento): string {
  switch (tipo) {
    case TipoMovimento.SAIDA:
      return "Despesa";
    case TipoMovimento.ENTRADA:
      return "Recebido";
    case TipoMovimento.SAIDA_INVESTIMENTO:
      return "Investido";
    default:
      return "";
  }
}