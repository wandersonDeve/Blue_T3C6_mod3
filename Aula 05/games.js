const express = require('express')
const app = express();
const porta = 3000
app.use(express.json())

const games = [
    'Need for Speed',
    'God of War', 
    'Final Fantasy',
    'Yu-Gi-Oh'
]

app.get('/games', (req, res) => {
    res.send(games.filter(Boolean))
})

app.get('/games/:id', (req, res) => {
    const id = req.params.id -1;
    const game = games[id]
    !game ? res.send(`Game não encontrado`) : res.send(game)
})

app.post('/games', (req, res) => {
    const game = req.body.game
    games.push(game)
    res.send(`O game ${game} foi adicionado com sucesso`)
})

app.put('/games/:id', (req, res) => {
    const id = req.params.id-1;
    const game = games[id];
    const newGame = req.body.game
    games[id] = newGame
    !game ? res.send(`Game não encontrado`) : res.send(`O game ${game} foi substituido por ${newGame}`)
})

app.delete('/games/:id', (req, res) => {
    const id = req.params.id -1;
    const game = games[id];
    delete games[id]
    !game ? res.send(`Game não encontrado`) : res.send(`O game ${game} foi deletado com sucesso`)
})


app.listen(porta, () => {
    console.info(`O app esta roadando em http://localhost:${porta}`)
})