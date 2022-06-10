const {MongoHelper} = require("../database/db")

module.exports.Dal = class Dal {
    storage = null
    colletionName = null

    constructor() {
        MongoHelper.setMongoUrl(process.env.MONGO_DB_URI)
    }

    async create(data) {
        if (!this.storage) await this.setStorage()
        this.storage.create(data)
    }
    
    async update(data, id) {
        if (!this.storage) await this.setStorage()
        this.storage.updateOne({id}, data)
    }
    
    async delete(id) {
        if (!this.storage) await this.setStorage()
        this.storage.deleteOne({id})
    }

    async list() {
        if (!this.storage) await this.setStorage()
        return this.storage.find({})
    }

    async get(id) {
        if (!this.storage) await this.setStorage()
        return this.storage.findOne({id})
    }

    async setStorage() {
        this.storage = await MongoHelper.getColletion(this.colletionName)
    }
}
