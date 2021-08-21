// 25. Crie um programa que gerencie o aproveitamento de um jogador de futebol. O programa vai
// ler o nome do jogador e quantas partidas ele jogou. Depois vai ler a quantidade de gols
// feitos em cada partida. No final, tudo isso será guardado em um objeto, incluindo o total de
// gols feitos durante o campeonato

const prompt = require("prompt-sync")();

const dados = {};
const gols = {};
let totalGols = 0

dados.nome = prompt('Qual o nome do jogador: ')
let partidas = +prompt('Quantas partidas ele jogou? ')

for(i=1;i<=partidas;i++){
    gol = +prompt(`Quantos gols ele fez na partida ${i}: `)
    gols['partidas '+i] = gol
    totalGols += gol
}
dados['gols'] = gols
dados['totalGols'] = totalGols

console.log(dados)