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

    async create(req, res, next) {
        const dados = req.body
        const result = await this.dao.create(dados) 
        res.status(201).json(result)
    }

    async update(req, res, next) {
        const dados = req.body
        const { id } = req.params
        await this.dao.update(dados, id)
        const result = await this.dao.get(dados.id)
        res.status(200).json(result)
    }

    async delete(req, res, next) {
        const { id } = req.params
        await this.dao.delete(id)
        res.status(200).send()
    }

    async list(req, res, next) {
        const data = await this.dao.list()
        console.log(data)
        res.status(200).json(data)
    }

    async get(req, res, next) {
        const { id } = req.params
        const data = await this.dao.get(id)
        res.status(200).json(data)
    }
}