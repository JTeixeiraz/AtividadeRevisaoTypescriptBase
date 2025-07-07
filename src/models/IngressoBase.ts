import { IIngresso } from "../interface/IIngresso";

abstract class IngressoBase implements IIngresso{
    public evento:string;
    public preco:number;

    protected eventosDetails:string[][] = []

    constructor(
        valEvento:string,
        valPreco:number
    ){
        this.evento = valEvento;
        this.preco = valPreco;
    }

    inserirEvento():void{
        this.eventosDetails.push([this.evento, this.preco.toString()]);
    }

    detalhes(): string {
        let retorno:string = "";

        for (let index = 0; index < this.eventosDetails.length; index++) {
            const element = this.eventosDetails[index].toString(); 
            retorno = retorno + `\n ${element} \n`
        }  
        return retorno;
    }

    validate(type:string): boolean {
        switch (type) {
            case "Convidado":
                return true;
                break;
            case "Base":
                return false;
                break;
            default:
                return false;
                break;
        }
    }
}

export default IngressoBase;