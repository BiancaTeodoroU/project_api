const { Router } = require('express')
const fs = require('fs')
const { FactoryRoute } = require('./factory')
const route = Router()

fs.readdirSync(`${__dirname}/../controllers`).forEach(function(file) {
    const routerName = file.split('.')[0]
    console.log(`${__dirname}/../miders/${routerName}`)
    const mids = fs.existsSync(`${__dirname}/../miders/${routerName}.js`) ? require(`../miders/${routerName}`) : []
    const controller = require('../controllers/' + file)
    route.use(FactoryRoute(`/${routerName}`, mids, controller))
})

module.exports = route