const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());

const jogos = [
  {
    id: 1,
    nome: "Resident Evil",
    link: "https://images-americanas.b2w.io/produtos/01/00/img/3161557/7/3161557731_1GG.jpg",
  },
  {
    id: 2,
    nome: "The Last of Us",
    link: "https://images-americanas.b2w.io/produtos/01/00/img/1459449/0/1459449098_1GG.jpg",
  },
  {
    id: 3,
    nome: "The Division",
    link: "https://images-americanas.b2w.io/produtos/01/00/img/134193/9/134193952_1GG.jpg",
  },
];

const jogosValidos = () => jogos.filter(Boolean);
const getJogosById = (id) => jogosValidos().find((jogo) => jogo.id === id);
const getJogosByIndex = (id) => jogosValidos().findIndex((jogo) => jogo.id === id);

app.get("/jogos", (req, res) => {
  res.send(jogosValidos);
});

app.get("/jogos/:id", (req, res) => {
  const id = +req.params.id;
  const jogo = jogos.getJogosById(id);
  !jogo ? res.status(404).send("Jogo não encontrado") : res.send(jogo);
});

app.post("/jogos", (req, res) => {
  const jogo = req.body;
  if (!jogo || !jogo.nome || !jogo.link) {
    res.status(400).send({
      Error: "Sintaxe inválida.",
    });
    return;
  }

  const jogoFinal = jogos[jogos.length - 1];

  if (jogos.length) {
    jogo.id = jogoFinal.id + 1;
    jogos.push(jogo);
  } else {
    jogo.id = 1;
    jogos.push(jogo);
  }
  res.send(`O jogo ${jogo.nome} foi adicionado com sucesso`);
});

app.put("/jogos/:id", (req, res) => {
  const id = +req.params.id;
  const jogoIndex = jogos.getJogosByIndex(id);

  if (jogoIndex < 0) {
    res.status(404).send({ error: "jogo não encontrado." });
    return;
  }

  const novojogo = req.body;

  if (!novojogo || !novojogo.nome || !novojogo.link) {
    res.status(400).send({ error: "jogo inválido!" });
    return;
  }

  const jogo = jogos.getJogosById(id);

  novojogo.id = jogo.id;
  jogos[jogoIndex] = novojogo;

  res.send({ message: "jogo alterado com sucesso!" });
});

app.delete("/jogos/:id", (req, res) => {
  const id = +req.params.id;

  const jogoIndex = jogos.getJogosByIndex(id)
  if (jogoIndex < 0) {
    res.status(404).send({error: "jogo não encontrado."});
    return;
  }

  jogos.splice(jogoIndex, 1);

  res.send({ message: "jogo apagado com sucesso!"});
});

app.listen(porta, () => {
  console.info(`Aplicação rodando em http://localhost:${porta}`);
});
