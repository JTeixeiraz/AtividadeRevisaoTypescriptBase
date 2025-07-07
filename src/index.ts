import { IngressoNormal } from "./models/IngressoNormal";
import { IngressoVIP } from "./models/IngressoVIP";
import { IngressoConvidado } from "./models/IngressoConvidado";
import { IIngresso } from "./interface/IIngresso";

function atividade1() {
    console.log("=== Atividade 1: Polimorfismo ===");
    const ingressos: IIngresso[] = [
        new IngressoNormal("Show de Rock", 100),
        new IngressoVIP("Show de Rock", 100, 50),
        new IngressoConvidado("Show de Rock")
    ];

    ingressos.forEach(ingresso => {
        console.log(ingresso.detalhes());
        console.log(`Válido: ${ingresso.validar()}`);
    });
}

function atividade2() {
    console.log("\n=== Atividade 2: Funções ===");

    function calcularJuros(valor: number, taxa: number): number {
        return valor * (1 + taxa / 100);
    }

    const calcularDesconto = (valor: number, percentual: number): number => {
        return valor * (1 - percentual / 100);
    };

    const exibirMensagem = function(mensagem: string) {
        console.log(mensagem);
    };

    console.log(`Juros: ${calcularJuros(100, 10)}`);
    console.log(`Desconto: ${calcularDesconto(100, 10)}`);
    exibirMensagem("Mensagem de teste");
}

function atividade3() {
    console.log("\n=== Atividade 3: Spread Operator ===");

    const cliente = { nome: "João", email: "joao@example.com" };
    const clienteAtualizado = { ...cliente, telefone: "123456789" };
    console.log(clienteAtualizado);

    const produtos = ["Arroz", "Feijão"];
    const produtosNovos = [...produtos, "Macarrão", "Azeite"];
    console.log(produtosNovos);
}

function atividade4() {
    console.log("\n=== Atividade 4: Destructuring ===");

    const pedido = { id: 123, cliente: "Maria", total: 350.50, status: "Enviado" };

    const { id, total } = pedido;
    console.log(`ID: ${id}, Total: ${total}`);

    const { status: statusPedido } = pedido;
    console.log(`Status: ${statusPedido}`);
}


function main() {
    atividade1();
    atividade2();
    atividade3();
    atividade4();
}

main();
