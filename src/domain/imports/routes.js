const { Router } = require('express')
const { FactoryRoute } = require('./factory')
const route = Router()

const userController = require('../controllers/user.controller')
const UserMiders = require('../miders/user')
route.use(FactoryRoute('/user', UserMiders, userController))

module.exports = route