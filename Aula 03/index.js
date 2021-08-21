const calculadora = require("./calculadora");
const prompt = require("prompt-sync")();

console.log(`Bem vindo a ${calculadora.nome}`);

const num1 = +prompt("Digite o primeiro numero: ");
const num2 = +prompt("Digite o segundo numero: ");

console.log();

console.log(`
Qual operação você gostaria de fazer?
    [1] - soma
    [2] - subtração
    [3] - multiplicação
    [4] - divisao
`);

const opcao = +prompt("Sua escolha: ");

if (opcao === 1) {
  console.log(`${num1} + ${num2} = ${calculadora.soma(num1, num2)}`);
} else if (opcao === 2) {
  console.log(`${num1} - ${num2} = ${calculadora.sub(num1, num2)}`);
} else if (opcao === 3) {
  console.log(`${num1} x ${num2} = ${calculadora.multi(num1, num2)}`);
} else if (opcao === 4) {
  console.log(`${num1} / ${num2} = ${calculadora.div(num1, num2)}`);
} else {
  console.log("opção invalida");
}
