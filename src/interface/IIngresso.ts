export interface IIngresso{
    evento:string
    preco:number;

    detalhes():string;
    validate(type:string):boolean;
}