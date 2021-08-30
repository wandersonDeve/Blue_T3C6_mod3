const express = require("express");
const JogoSchema = require("./models/jogo");
const mongoose = require("./database");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/jogos", async (req, res) => {
  const jogos = await JogoSchema.find();
  res.send({ jogos });
});

app.get("/jogos/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ erro: "Id invalido" });
    return;
  }

  const jogo = await JogoSchema.findById(id);

  if (!jogo) {
    res.status(404).send({ erro: "Jogo não encontrado" });
    return;
  }
  res.send({ jogo });
});

app.post("/jogos", async (req, res) => {
  const jogo = req.body;

  if (!jogo || !jogo.nome || !jogo.imagem) {
    res.status(400).send({ erro: "Formato Json invalido" });
    return;
  }

  const jogoSalvo = await new JogoSchema(jogo).save();

  res.status(201).send({ jogoSalvo });
});

app.put("/jogos/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId(id)) {
    res.status(422).send({ erro: "Id invalido" });
    return;
  }

  const jogo = await JogoSchema.findById(id);

  if (!jogo) {
    res.status(404).send({ erro: "Jogo não encontrado" });
    return;
  }

  const novoJogo = req.body;

  if (!novoJogo || !novoJogo.nome || !novoJogo.imagem) {
    res.status(400).send({ erro: "Formato Json invalido" });
    return;
  }

  await JogoSchema.findOneAndUpdate({ _id: id }, novoJogo);

  const jogoAtualizado = await JogoSchema.findById(id);

  res.send({ jogoAtualizado });
});

app.delete("/jogos/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ erro: "Id invalido" });
    return;
  }

  const jogo = await JogoSchema.findById(id);

  if (!jogo) {
    res.status(404).send({ erro: "Jogo não encontrado" });
    return;
  }

  await JogoSchema.findOneAndDelete(id);
  res.send(`O jogo ${jogo.nome} foi excluido com sucesso`);
});

app.listen(port, () => {
  console.info(`Aplicação rodando em htt://localhost:${port}`);
});
