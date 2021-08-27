const express = require("express");
const app = express();

app.use(express.json());

const filmes = [
  {
    id: 1,
    nome: "Viuva Negra",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg",
  },
  {
    id: 2,
    nome: "Space Jam: Um Novo Legado",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kU0NbsUVoUMcYxoISmBCxFmgWYC.jpg",
  },
  {
    id: 3,
    nome: "O Esquadrão Suicida",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
  },
];

const listaFilme = () => filmes.filter(Boolean);
const pegarFilme = (id) => listaFilme().find((filme) => filme.id === id);
const indiceFilme = (id) => listaFilmes().findIndex((filme) => filme.id === id);

app.get("/filmes", (req, res) => {
  res.status(200).send({ listaDefilme: listaFilmes() });
});

app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];

  !filme
    ? res.status(404).send({ error: "Filme não existe" })
    : res.json({ filme });
});

app.post("/filmes", (req, res) => {
  const filme = req.body;
  if (!filme || !filme.nome || !filme.imagemUrl) {
    res.status(400).send({
      message: "Formato invalido, tente novamente",
    });
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
  res.status(201).send(`O filme ${filme.nome} foi adicionado com sucesso`);
});

app.put("/filmes/:id", (req, res) => {
  const id = +req.params.id;

  const filmeIndex = indiceFilme(id);
  console.log(filmeIndex);

  if (filmeIndex < 0) {
    res.status(404).send({
      message: "O filme nao foi encontrado, tente novamente.",
    });
    return;
  }

  const novoFilme = req.body;

  if (!Object.keys(novoFilme).length) {
    res.status(400).send({
      message: "O body esta vazio!",
    });
    return;
  }

  if (!novoFilme || !novoFilme.nome || !novoFilme.imagemUrl) {
    res.status(400).send({
      message: "filme invalido, tente novamente.",
    });
    return;
  }

  const filme = indiceFilme(id);

  console.log(filmeIndex);
  filmes[filmeIndex] = {
    // Spread operator syntax
    ...filme,
    ...novoFilme,
  };

  res.send(filmes[filmeIndex]);
});

app.delete("/filmes/:id", (req, res) => {
  const id = +req.params.id;

  const filmeIndex = indiceFilme(id);

  if (filmeIndex < 0) {
    res.status(404).send({
      message: "Filme nao encontrado, tente novamente.",
    });
    return;
  }

  filmes.splice(filmeIndex, 1);
  res.send({
    message: "Filme removido com sucesso",
  });
});

app.listen(3000);
