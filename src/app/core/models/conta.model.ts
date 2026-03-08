export interface Conta {
    apelido: string,
    numero: number,
    saldo: number,
    tipoConta: TipoConta
}

export enum TipoConta {
    OUTROS,
    GERAL,
    ALIMENTACAO
}
