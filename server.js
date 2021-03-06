const express = require('express')

const RecipeRouter = require('./recipes/recipe-router')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: "Running Successfully!!"})
})

server.use('/api/recipes', RecipeRouter)

module.exports = server