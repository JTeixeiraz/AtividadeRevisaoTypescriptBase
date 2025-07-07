Principais conceitos em prática no laboratório da Etapa 2 para a Prova Intermediária


ATIVIDADES

1) Classes, Herança, Interfaces, Encapsulamento e Polimorfismo
Descrição: croar um sistema de ingressos para eventos.
Defina uma interface Ingresso com propriedades comuns como evento (string) e preco (number), e um método detalhes() que retorna uma string, e um metodo validar() que retorna um booleano.

Crie uma classe abstrata IngressoBase que implementa Ingresso e encapsula as propriedades evento e preco com modificadores de acesso que somente ela e as classes filhas possam enxergar.

Crie duas classes concretas que estendem IngressoBase: IngressoVIP (com um adicional de preço e método polimórfico para detalhes); IngressoNormal. e IngressoConvidado (ingresso de valor gratuito com método polimórfico para detalhes).

Demonstre polimorfismo chamando o método detalhes() em um array contendo ingressos de ambos os tipos.

2) Arrow Functions, Funções Nomeadas e Anônimas
Descrição:
Em um módulo financeiro, crie:
   -Uma função nomeada calcularJuros que recebe valor e taxa e retorna o valor acrescido da taxa.
   -Uma arrow function chamada calcularDesconto que recebe valor e percentual e retorna o valor com desconto.
   -Uma função anônima atribuída a uma variável exibirMensagem que recebe uma string e exibe no console.

3) Spread Operator com Objeto e Array
Descrição: (crie os objetos se for necessário)
   -Dado um objeto cliente com propriedades como nome e email, crie um novo objeto clienteAtualizado usando spread operator para adicionar uma propriedade telefone.

   -Dado um array produtos com nomes de produtos, crie um novo array produtosNovos que contenha os produtos antigos mais dois novos produtos adicionados usando spread operator.

4) Destructuring de Objeto
Descrição: (crie os objetos se for necessário)
Considere um objeto pedido com propriedades: id, cliente, total e status.

   -Use destructuring para extrair as propriedades id e total.
   -Use destructuring para extrair status com um nome de variável diferente (exemplo: statusPedido).

Exiba no console a informação usando as variáveis extraídas.

5) Uso de await dentro de funções async: já foi abordado na atividade do dia 02/07
6) Uso de import x export: já foi abordado na atividade do dia 02/07