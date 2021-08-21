const prompt = require("prompt-sync")();

// 1. Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"
console.log("O primeiro programa a gente nunca esquece!");

console.log("\n\n\nExercicio 02");
// 2. Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.
console.log("Wanderson Gomes dos Santos\nSão Paulo-SP\n04940-140\n11900000000");

console.log("\n\n\nExercicio 03");
// 3. Faça um programa que mostre na tela uma letra de música que você gosta (Se você utilizar template string o console obedece a quebra de linha).
console.log(`
Jovem sonhador
Sem inspiração para viver
Pobre pecador
Que pensava em morrer

Realidade batia em sua porta
Dizia que era o fim
Desilusão e tristeza
Chegaram tão forte
Querendo consumir

Tendo muita dor
No seu peito o sofrer
Sempre lutador
Mas conformado a perder
Os teus sonhos estavam acabados não encontrava luz
Mas uma nova história foi escrita por Jesus

E ele vai mudar tua realidade
Ele é o caminho, a vida e a verdade
Com ele você pode ter fé e esperança
Pois na tua história vai trazer mudança
Você vai ate o fim porque ele te sustenta
Ele é o pão que te alimenta
Jesus vai mudar tua realidade

Tendo muita dor e no seu peito o sofrer
Sempre lutador mas conformado a perder
Os teus sonhos estavam acabados não encontrava luz
Mas uma nova história foi escrita por Jesus

E ele vai mudar tua realidade
Ele e o caminho, a vida e a verdade
Com ele você pode ter fé e esperança
Pois na tua história vai trazer mudança
Você vai ate o fim porque ele te sustenta
Ele é o pão que te alimenta
Jesus vai mudar tua realidade
`);

console.log("\n\n\nExercicio 04");
// 4. Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.Como primeiro passo, escreva um programa que produza a seguinte saída:
let notas = {
  "ALINE  ": 9.0,
  "MÁRIO  ": "DEZ",
  "SÉRGIO ": 4.5,
  SHIRLEY: 7.0,
};
console.log("ALUNO (A)  NOTA\n=========  ====");
for (let key in notas) {
  console.log(`${key}     ${notas[key]}`);
}

console.log("\n\n\nExercicio 05");
// 5. Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
let nome = prompt("Qual o seu nome: ");
let lista = ["Terror", "Suspense", "Romance", "Comedia"];
let escolha = parseInt(
  prompt(`
Qual seu estilo de serie ?
    1 - Terror
    2 - Suspense
    3 - Romance
    4 - Comedia
`)
);
console.log(`${nome} seu estilo favorito é ${lista[escolha - 1]}`);

console.log("\n\n\nExercicio 06");
// 6. Escreva um programa que receba dois valores digitados pelo usuário(Utilize o objeto Math para arredondar o calculo):
//     Quantidade de vida de um monstro (entre 10 e 50);
//     Valor do ataque do jogador por turno (entre 5 e 10);
//     Baseado nos valores digitados, exiba a qtn de turnos que o jogador irá demorar para conseguir derrotar o monstro.
//     O jogador irá derrotar o monstro em 8 turnos.
let vidaMonstro = parseInt(prompt("Escolha um valor de vida do monstro entre 10 e 50: "));
let ataque = parseInt(prompt("Digite o valor do seu ataque entre 5 e 10: "));
let turnos = Math.ceil(vidaMonstro / ataque);
console.log(`O jogador irá derrotar o monstro em ${turnos} turnos`);

console.log("\n\n\nExercicio 07");
// E os 10% do garçom?
//     Defina uma variável para o valor de uma refeição que custou R$ 42,54;
//     Defina uma variável para o valor da taxa de serviço que é de 10%;
//     Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
let valorRefeicao = 42.54;
const taxaServico = 10;
let valorTotal = valorRefeicao * ((100 + taxaServico) / 100);
console.log(`Valor a ser pago é de R$${valorTotal.toFixed(2)}`);

console.log("\n\n\nExercicio 08");
// Qual o valor do troco?
//     Defina uma variável para o valor de uma compra que custou R$100,98;
//     Defina uma variável para o valor que o cliente pagou R$150,00;
//     Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.
let valorCompra = 100.98;
let valorPago = 150.0;
let troco = valorPago - valorCompra;
console.log(`O troco é de R$${Math.floor(troco)}`);

console.log("\n\n\nExercicio 09");
// Você está na flor da idade?
//     Defina uma variável para o valor do ano do nascimento;
//     Defina uma variável para o valor do ano atual;
//     Defina uma variável que calcula o valor final da idade da pessoa;
//     Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
let anoNascimento = prompt("Qual o ano do seu nascimento: ");
let anoAtual = 2021;
let idade = anoAtual - anoNascimento;
console.log(`Sua idade é ${idade} anos, Você esta na flor da idade`);

console.log("\n\n\nExercicio 10");
// Conversor de moedas: Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:
//     DOLAR
//     EURO
//     LIBRA ESTERLINA
//     DÓLAR CANADENSE
//     PESO ARGENTINO
//     PESO CHILENO
//     Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99
let valorReal = parseFloat(
  prompt("Qual o valor em real que deseja converter: ")
);
let valorDolar = 0.19;
let valorEuro = 0.16;
let valorLibraEsterlina = 0.14;
let valorDolarCanadense = 0.24;
let valorPesoArgentino = 18.34;
let valorPesoChileno = 149.16;

console.log(`
    R$${valorReal}

    US$${(valorReal * valorDolar).toFixed(2)}
    €${(valorReal * valorEuro).toFixed(2)}
    £${(valorReal * valorLibraEsterlina).toFixed(2)}
    C$${(valorReal * valorDolarCanadense).toFixed(2)}
    $${(valorReal * valorPesoArgentino).toFixed(2)}
    $${(valorReal * valorPesoChileno).toFixed(2)}
`);
