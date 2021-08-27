const express = require('express')
const app = express()
const porta = 3000

app.use(express.json())

const pokemons = [
    'Evee',
    'Meow',
    'Butterfly'
]

app.get('/pokemons', (req, res) => {
    res.send(pokemons.filter(Boolean))
})

app.get('/pokemons/:id', (req, res) => {
    const id = req.params.id -1
    const pokemon = pokemons[id]
    !pokemon ? res.send('Não encontrado') : res.send(pokemon)
})

app.post('/pokemons', (req,res) => {
    const pokemon = req.body.pok
    pokemons.push(pokemon)
    res.send(`O pokemon ${pokemon} foi adicionado com sucesso`)
})

app.put('/pokemons/:id', (req, res) => {
    const id = req.params.id-1
    const pokemon = pokemons[id]
    const novoPokemon = req.body.pok
    pokemons[id] = novoPokemon
    !pokemon ? res.send('Pokemon não existe') : res.send(`O pokemon ${pokemon} foi alterado para ${novoPokemon}`)
})

app.delete('/pokemons/:id', (req, res) => {
    const id = req.params.id -1
    const pokemon = pokemons[id]
    delete pokemons[id]
    !pokemon ? res.send('Pokemon não existe') : res.send(`O pokemon ${pokemon} foi deletado com sucesso`)
})

app.listen(porta, () => {
    console.info(`O app esta rodando em http://localhost:${porta}`)
})