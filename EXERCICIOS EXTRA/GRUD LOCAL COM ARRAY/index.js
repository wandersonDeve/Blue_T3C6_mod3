const express = require("express");
const app = express()
const porta = 3000

app.use(express.json())

const filmes = ['homem aranha', 'lucy', 'estranho']

app.get('/', (req, res) => {
    res.send('Seja be vindo')
})

app.get('/filmes', (req, res) => {
    res.send(filmes.filter(Boolean))
})

app.get('/filmes/:id', (req,res) => {
    const id = req.params.id -1
    const filme = filmes[id]
    !filme ? res.status(400).send('erro') : res.send(filme)
})

app.post('/filmes', (req,res) => {
    const filme = req.body.filme
    filmes.push(filme)
    !filme ? res.send(404).send('erro') : res.send(`O filme ${filme} foi adicionado com sucesso`)
})

app.put('/filmes/:id', (req, res) => {
    const id = req.params.id -1
    const filme = filmes[id]
    const novoFilme = req.body.filme
    filmes[id] = novoFilme
    !filme || !novoFilme ? res.send('Erro') : res.send(`O filme ${filme} foi trocado pelo filme ${novoFilme}`)
})

app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id -1
    const filme = filmes[id]

    delete filmes[id]
    !filme ? res.send(404).send('erro') : res.send(`O filme ${filme} foi excluido com sucesso`)
})


app.listen(porta, () => {
    console.info(`Aplicação ordando em http://localhost:${porta}`)
})