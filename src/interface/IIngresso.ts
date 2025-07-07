export interface IIngresso {
    readonly evento: string;
    readonly preco: number;

    detalhes(): string;
    validar(): boolean;
}
