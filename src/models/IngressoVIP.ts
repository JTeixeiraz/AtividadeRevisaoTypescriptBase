import { IngressoBase } from "./IngressoBase";

export class IngressoVIP extends IngressoBase {
    constructor(evento: string, preco: number, private adicional: number) {
        super(evento, preco + adicional);
    }

    detalhes(): string {
        return `Ingresso VIP para ${this.evento} - Preço: R$${this.preco}`;
    }
}