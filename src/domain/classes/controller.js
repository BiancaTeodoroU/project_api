module.exports.Controller = class Controller {
    dao = null
    
    constructor(dao) {
        this.dao = dao;
        this.list = this.list.bind(this)
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
        this.get = this.get.bind(this)
        this.update = this.update.bind(this)
    }

    create(req, res, next) {
        const dados = req.body
        this.dao.create(dados.data, dados.id)
        res.status(201).json({ ...dados.data, id: dados.id})
    }

    update(req, res, next) {
        const dados = req.body
        this.dao.update(dado.data, dados.id)
        res.status(200).json({ ...dados.data, id: dados.id})
    }

    delete(req, res, next) {
        const { id } = req.body
        this.dao.delete(id)
        res.status(200).send()
    }

    list(req, res, next) {
        const data = this.dao.list()
        res.status(200).json(data)
    }

    get(req, res, next) {
        const { id } = req.body
        const data = this.dao.get(id)
        res.status(201).json(data)
    }
}