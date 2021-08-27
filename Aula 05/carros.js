const express = require("express");
const app = express();

const porta = 3000;

app.use(express.json())

const carros = ["Ka", "Renegate", "Toro"];

app.get("/carros", (req, res) => {
  res.send(carros.filter(Boolean));
});

app.get("/carros/:id", (req, res) => {
  const id = req.params.id - 1;
  const carro = carros[id];
  !carro ? res.send("O carro não existe") : res.send(carro);
});

app.post("/carros", (req, res) => {
  const novoCarro = req.body.car;
  carros.push(novoCarro);
  res.send(`O ${novoCarro} foi adicionado com sucesso`);
});

app.put("/carros/:id", (req, res) => {
  const id = req.params.id - 1;
  const carro = carros[id];
  const novoCarro = req.body.car;
  carros[id] = novoCarro
  !carro
    ? res.send("O carro selecionado não existe")
    : res.send(`O carro ${carro} foi substituido por ${novoCarro}`);
});

app.delete("/carros/:id", (req, res) => {
  const id = req.params.id - 1;
  const carro = carros[id];
  delete carros[id];
  !carro
    ? res.send("O carro não existe")
    : res.send(`O carro ${carro} foi deletado com sucesso`);
});

app.listen(porta, () => {
  console.info(`O app esta rodando em http://localhost:${porta}`);
});
