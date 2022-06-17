const { Router } = require('express')
const route = Router()

module.exports.FactoryRoute = function(path, mids, controller) {
    route.get(path, controller.list)
    route.get(`${path}/:id`, controller.get)
    route.post(path, ...mids, controller.create)
    route.put(`${path}/:id`, controller.update)
    route.delete(`${path}/:id`, controller.delete)
    console.log(mids)
    return route
}