const express = require('express')

const Cook = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res) => {
    Cook.getRecipes()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "Something went wrong retrieving the data"
        })
    })
})

router.get('/', (req, res) => {
    
})
router.get('/', (req, res) => {
    
})

module.exports = router