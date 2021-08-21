// 26. Crie um programa que leia nome, gênero e idade de várias pessoas, guardando os dados de
// cada pessoa em um objeto e todos os objetos em uma lista. No final, mostre:
//     A) Quantas pessoas estão cadastradas.
//     B) A média da idade.
//     C) Uma lista com as pessoas com gênero feminino.
//     D) Uma lista com as idades que estão acima da média.
//     OBS: O programa deve garantir que quando perguntar ao usuário se deseja continuar a resposta
//     seja somente S ou N.

const prompt = require("prompt-sync")();

const lista = [];

do {
  const pessoa = {};

  pessoa["nome"] = prompt("Qual o seu nome: ");
  pessoa["genero"] = prompt("Qual o seu genero: ");
  pessoa["idade"] = +prompt("Qual sua idade: ");

  lista.push(pessoa);

  var resp = prompt("Deseja Continuar? [S/N] -> ").toLocaleUpperCase()[0];

  if (resp == "N") {
    var resp = "N";
  } else if (resp != "S") {
    console.log("Valor invalido\n");
  }
} while (resp == "S");

console.log(lista);
