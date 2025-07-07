import { IIngresso } from "../interface/IIngresso";

export abstract class IngressoBase implements IIngresso {
    constructor(public readonly evento: string, public readonly preco: number) {}

    abstract detalhes(): string;

    validar(): boolean {
        return this.preco >= 0;
    }
}
