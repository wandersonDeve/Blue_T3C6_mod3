const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());

const filmes = [
  {
    id: 1,
    nome: "homem aranha",
    duracao: 150,
  },
  {
    id: 2,
    nome: "viuva negra",
    duracao: 120,
  },
  {
    id: 3,
    nome: "lucy",
    duracao: 76,
  },
];

const filtroFilmes = () => filmes.filter(Boolean);
const pegarFilmePeloId = (id) =>
  filtroFilmes().find((filme) => filme.id === id);

app.get("/filmes", (req, res) => {
  res.send(filtroFilmes());
});

app.get("/filmes/:id", (req, res) => {
  const id = +req.params.id;
  const filme = pegarFilmePeloId(id);
  res.send(filme);
});

app.post("/filmes", (req, res) => {
  const filme = req.body;
  if (!filme || !filme.nome || !filme.duracao) {
    res.status(400).send("Erro");
    return;
  }
  const ultimoFilme = filmes[filmes.length - 1];
  if (filmes.length) {
    filme.id = ultimoFilme.id + 1;
    filmes.push(filme);
  } else {
    filme.id = 1;
    filmes.push(filme);
  }

  res.send(`O filme ${filme.nome} foi adicionado com sucesso`);

});



app.listen(porta, () => {
  console.info(`O servidor esta rodando em htt://localhost:${porta}`);
});
