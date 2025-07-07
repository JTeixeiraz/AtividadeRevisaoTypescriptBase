import { IngressoBase } from "./IngressoBase";

export class IngressoConvidado extends IngressoBase {
    constructor(evento: string) {
        super(evento, 0);
    }

    detalhes(): string {
        return `Ingresso Convidado para ${this.evento} - Gratuito`;
    }
}