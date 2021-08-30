const express = require("express");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const app = express();

(async () => {
  app.use(express.json());
  const port = 3000;

  const url = `mongodb+srv://admin:<password>@cluster0.yhbkv.mongodb.net/test`;

  app.get('/', (req, res) => {
      res.send('Bem vindo a nova API RESTFULL')
  })

  app.get('/personagens', async (req, res) => {
      
  })
 


  app.listen(port, () => {
    console.info(`Servidor rodando em http://localhost:${port}`);
  });
})();
