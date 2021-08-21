// 28. Faça um programa que leia nome e média de um aluno, guardando também a situação em
// um objeto. No final, mostre o conteúdo da estrutura na tela. A média para aprovação é 7. Se
// o aluno tirar entre 5 e 6.9 está de recuperação, caso contrário é reprovado.
const prompt = require("prompt-sync")();

const lista = {};

lista["nome"] = prompt("Qual o nome do aluno: ");
nota = parseFloat(prompt("Qual a media do aluno: "));
if (nota > 5 && nota < 6.9) {
  lista["nota"] = nota;
  lista["situacao"] = "recuperação";
} else if (nota >= 7) {
  lista["nota"] = nota;
  lista["situacao"] = "aprovado";
} else {
  lista["nota"] = nota;
  lista["situacao"] = "reprovado";
}

console.log(lista);
