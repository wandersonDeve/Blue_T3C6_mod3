const prompt = require("prompt-sync")();

// 19. Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:
let largura = parseFloat(
  prompt("Qual o valor do largura do terreno: em metros ")
);
let comprimento = parseFloat(
  prompt("Qual o valor do comprimento do terreno: em metros ")
);
console.log(`${area(largura, comprimento)}m²`);

function area(largura, comprimento) {
  areaTerreno = largura * comprimento;
  return areaTerreno;
}

console.log("\n\n\nExercicio 20");
// 20. Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
let anoNascimento = parseInt(prompt("Digite o ano de seu nascimento: "));
console.log(voto(anoNascimento));

function voto(nascimento) {
  let idade = 2021 - nascimento;
  if ((idade >= 16 && idade < 18) || idade > 65) {
    return "Voto OPCIONAL";
  } else if (idade >= 18 && idade <= 65) {
    return "Voto OBRIGATÓRIO";
  } else {
    return "Voto NEGADO";
  }
}

console.log("\n\n\nExercicio 21");
// 21. Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
let pc = Math.ceil(Math.random() * 10);
let jogador = parseInt(prompt("Qual numero o pc escolheu entre 0 e 10: "));
if (jogador === pc) {
  console.log(`Parabens, escolhi o numero ${pc}`);
} else {
  console.log(`Perdeu, escolhi o numero ${pc}`);
}

console.log("\n\n\nExercicio 22");
// 22. Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
//     Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
//     Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
do {
  var valor = +prompt("Qual o valor deseja sacar: entre 10 e 600 -> ");
  if ((valor) => 10 && valor <= 600) {
    var resp = "N";
  } else {
    console.log("Valor invalido\n");
  }
} while (resp == "S");

let cem = parseInt(valor / 100);
let cinquenta = parseInt((valor % 100) / 50);
let dez = parseInt(((valor % 100) % 50) / 10);
let cinco = parseInt((((valor % 100) % 50) % 10) / 5);
let um = parseInt((((valor % 100) % 50) % 10) % 5);

console.log(`Para sacar a quantia de R$${valor.toFixed(2)} é necessario:`);
if (cem != 0) {
console.log(`${cem} notas de R$100.00`);
}
if (cinquenta != 0) {
  console.log(`${cinquenta} notas de R$50.00`);
}
if (dez != 0) {
  console.log(`${dez} notas de R$10.00`);
}
if (cinco != 0) {
  console.log(`${cinco} notas de R$5.00`);
}
if (um != 0) {
  console.log(`${um} notas de R$1.00`);
}
