const express = require("express");
const app = express();

app.use(express.json());

const series = ["Fringe", "Doctor Who", "Sabrina", "Perdidos no Espaço"];

app.get("/", (req, res) => {
  res.send(series);
});

app.listen(3000)
