const express = require(`express`)
const breads = express.Router()
const Bread = require(`../models/bread.js`)

//INDEX
breads.get(`/`, function(req, res) {
    res.render(`Index`, 
        {
            breads: Bread,
            title: `Index Page`
        }
    )
    res.send(`This is index at /breads`)
})

//SHOW
breads.get(`/:arrayIndex`, function(req, res) {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads