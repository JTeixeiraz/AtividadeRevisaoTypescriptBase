import { IngressoBase } from "./IngressoBase";

export class IngressoNormal extends IngressoBase {
    constructor(evento: string, preco: number) {
        super(evento, preco);
    }

    detalhes(): string {
        return `Ingresso Normal para ${this.evento} - Preço: R$${this.preco}`;
    }
}