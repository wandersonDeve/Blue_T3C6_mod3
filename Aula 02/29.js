// 29. Crie um programa que leia nome, ano de nascimento e carteira de trabalho e cadastre-os
// (com idade) em um objeto. Se por acaso a CTPS for diferente de 0, o objeto receberá
// também o ano de contratação e o salário. Calcule e acrescente , além da idade , com
// quantos anos a pessoa vai se aposentar. Considere que o trabalhador deve contribuir por 35
// anos para se aposentar.
const prompt = require("prompt-sync")();

let variavel = +prompt('valor: ')

let teste = variavel<1000 ? 'menor que mil': 'maior que mil'

console.log(teste)