const express = require("express");
const app = express();

app.use(express.json());

const series = ["Fringe", "Doctor Who", "Sabrina", "Perdidos no Espaço"];

app.get("/series", (req, res) => {
  res.status(200).send({listaDeSerie : series.filter(Boolean)});
});

app.get("/series/:id", (req, res) => {
  const id = req.params.id - 1;
  const serie = series[id];

  !serie ? res.send("Serie não encontrado") : res.send(serie);
});

app.post("/series", (req, res) => {
  const item = req.body.nome;
  series.push(item);
  res.send(`O item ${item} foi adicionado com sucesso`);
});

app.put("/series/:id", (req, res) => {
  const id = req.params.id - 1;
  const item = req.body.nome;
  const serie = series[id];
  series[id] = item;
  res.send(`A serie ${serie} foi trocado por ${item}`);
});

app.delete("/series/:id", (req, res) => {
  const id = req.params.id - 1;
  const serie = series[id];
  delete series[id];
  res.send(`A serie ${serie} foi deletada com sucesso`);
});

app.listen(3000);
