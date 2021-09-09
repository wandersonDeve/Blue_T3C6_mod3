const Personagem = require("../models/Personagem")

const getAll = async (req, res) => {
    try{
        const personagens = await Personagem.find()
        return res.send({ personagens })
    }catch(err){
        res.status(500).send({ error:err })
    }
}
const getById = async (req, res) => {
    const id = req.params.id

    try{
        const personagem = await personagem.findById(id)
        if(!personagem){
            res.status(404).send({ message:"Personagem não encontrado" })
            return
        }
    }catch(err){
        res.status(500).send({ error: err })
    }
}

module.exports = {
    getAll,
    getById
}