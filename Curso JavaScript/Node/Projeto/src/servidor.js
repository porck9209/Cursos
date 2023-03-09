const porta = 3003

const express = require('express')
const app = express()
const BancoDeDados = require('./BancoDeDados')


app.get('/produtos', (req, res, next) => {
    res.send(BancoDeDados.getProdutos())
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(BancoDeDados.getProduto())
})


app.listen(porta, () => {
    console.log(`Servidor esa executando na porta ${porta}.`)
})