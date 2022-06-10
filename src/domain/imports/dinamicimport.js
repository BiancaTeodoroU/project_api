const { Router } = require('express')
const fs = require('fs')
const { FactoryRoute } = require('./factory')
const route = Router()

fs.readdirSync(`${__dirname}/../controllers`).forEach(function(file) {
    const controller = require('../controllers/' + file)
    route.use(FactoryRoute(`/${file.split('.')[0]}`, controller))
})

module.exports = route