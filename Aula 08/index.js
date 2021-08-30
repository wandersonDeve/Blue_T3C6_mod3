const express = require("express");
const FilmeSchema = require("./models/filme");
const mongoose = require("./database");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ info: "Hello MongoDB" });
});

app.get("/filmes", async (req, res) => {
  const filmes = await FilmeSchema.find();
  res.send({ filmes });
});

app.get("/filmes/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ error: "id invalido" });
    return;
  }
  const filme = await FilmeSchema.findById(id);
  if (!filme) {
    res.status(404).send({ erro: "Filme não encontrado" });
    return;
  }
  res.send(filme);
});

app.post("/filmes", async (req, res) => {
  const filme = req.body;

  if (!filme || !filme.nome || !filme.duracao) {
    res.status(400).send({ error: "Filme invalido" });
    return;
  }

  const filmeSalvo = await new FilmeSchema(filme).save();

  res.status(201).send({ filmeSalvo });
});

app.put("/filmes/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ error: "id invalido" });
    return;
  }

  const filme = await FilmeSchema.findById(id);

  if (!filme) {
    res.status(404).send({ erro: "Filme não encontrado" });
    return;
  }

  const novoFilme = req.body;

  if (!novoFilme|| !novoFilme.nome || !novoFilme.duracao) {
    res.status(400).send({ error: "Filme invalido" });
    return;
  }

  await FilmeSchema.findOneAndUpdate({_id: id}, novoFilme);

  const filmeAtualizado = await FilmeSchema.findById(id);

  res.send({ filmeAtualizado });
});

app.delete('/filme/:id', async (req, res) => {
  const id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ error: "id invalido" });
    return;
  }
  const filme = await FilmeSchema.findById(id);

  if (!filme) {
    res.status(404).send({ erro: "Filme não encontrado" });
    return;
  }

  await FilmeSchema.findOneAndDelete(id)
  res.send({message: 'Filme excluido com sucesso'})

})

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
