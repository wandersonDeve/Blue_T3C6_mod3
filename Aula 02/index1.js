const prompt = require("prompt-sync")();

// 11. Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
//     Crie uma variável para receber o valor, com conversão para int
//     Para um número ser par, a divisão dele por 2 tem que dar resto 0
let num = parseInt(prompt("Digite um numero para ver se ele é par ou impar: "));
num % 2 == 0
  ? console.log(`O numero ${num} é par`)
  : console.log(`O numero ${num} é impar`);

console.log("\n\n\nExercicio 12");
// 12. Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0, no prompt.
let numero = 0;
while (numero === 0) {
  numero = parseInt(
    prompt("Digite um numero para ver se ele é positivo ou negativo: ")
  );
}
numero > 0
  ? console.log(`O numero ${numero} é positivo`)
  : console.log(`O numero ${numero} é negativo`);

console.log("\n\n\nExercicio 13");
// 13. Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.
let primeiroNum = parseInt(prompt("Digite um numero: "));
let segundoNum = parseInt(prompt("Digite um numero: "));
if (primeiroNum > segundoNum) {
  console.log(`o numero ${primeiroNum} é maior que o numero ${segundoNum}`);
} else if (primeiroNum < segundoNum) {
  console.log(`o numero ${segundoNum} é maior que o numero ${primeiroNum}`);
} else {
  console.log(`Numeros iguais`);
}

console.log("\n\n\nExercicio 14");
// Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
//     Se a nota for menor que 6.0, deve exibir a nota F.
//     Se a nota for de 6.0 até 7.0, deve exibir a nota D.
//     Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
//     Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
//     Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.
let notaAluno = parseFloat(prompt("Digite a nota do aluno: "));
if (notaAluno < 6.0) {
  console.log(`Nota F`);
} else if (notaAluno > 6.0 && notaAluno <= 7.0) {
  console.log(`Nota D`);
} else if (notaAluno > 7.0 && notaAluno <= 8.0) {
  console.log(`Nota C`);
} else if (notaAluno > 8.0 && notaAluno <= 9.0) {
  console.log(`Nota B`);
} else {
  console.log(`Nota A`);
}

console.log("\n\n\nExercicio 15");
// Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5%
let salario = parseFloat(prompt("Digite o valor do salario: "));
if (salario <= 280) {
  console.log(
    `com um salrio de R$${salario.toFixed(
      2
    )}\nvocê tera um aumento de 20% que vale ${(salario * 0.2).toFixed(
      2
    )}\nSeu novo salario é de R$${(salario * 1.2).toFixed(2)}`
  );
} else if (salario > 280 && salario <= 700) {
  console.log(
    `com um salrio de R$${salario.toFixed(
      2
    )}\nvocê tera um aumento de 15% que vale ${(salario * 0.15).toFixed(
      2
    )}\nSeu novo salario é de R$${(salario * 1.15).toFixed(2)}`
  );
} else if (salario > 700 && salario < 1500) {
  console.log(
    `com um salrio de R$${salario.toFixed(
      2
    )}\nvocê tera um aumento de 10% que vale ${(salario * 0.1).toFixed(
      2
    )}\nSeu novo salario é de R$${(salario * 1.1).toFixed(2)}`
  );
} else if (salario >= 1500) {
  console.log(
    `com um salrio de R$${salario.toFixed(
      2
    )}\nvocê tera um aumento de 5% que vale ${(salario * 0.05).toFixed(
      2
    )}\nSeu novo salario é de R$${(salario * 1.05).toFixed(2)}`
  );
}


console.log("\n\n\nExercicio 16");
// 16. Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
let lista = [];
do{
  let num = +prompt('Numeros: ')
  const exist = lista.find(item => item == num)
  exist == undefined? lista.push(num): console.log('Numero ja existe')

  var resp = prompt('Deseja continuar? [S/N] ').toUpperCase()[0]
} while(resp == 'S')
console.log(lista)

console.log("\n\n\nExercicio 17");
// 17. Utilizando laço imprima a tabuada do 8 na tela.
for(let i=0;i<11;i++){
    console.log(`${i} x 8 = ${i*8}`)
}


console.log("\n\n\nExercicio 18");
// 18. Agora imprima todas as tabuadas do número 1 ao 10.

for (let i=1;i<11;i++){
    for (let k=0;k<11;k++){
        console.log(`${i} x ${k} = ${i*k}`)
    }
    console.log('\n')
}

