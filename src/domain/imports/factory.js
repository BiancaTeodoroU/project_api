const { Router } = require('express')
const route = Router()

module.exports.FactoryRoute = function(path, controller) {
    route.get(path, controller.list)
    route.get(`${path}/:id`, controller.get)
    route.post(path, controller.create)
    route.put(path, controller.update)
    route.delete(`${path}/:id`, controller.delete)
    return route
}