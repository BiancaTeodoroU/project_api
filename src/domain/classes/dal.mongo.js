const {MongoHelper} = require("../database/db")

module.exports.Dal = class Dal {
    storage = null
    collectionName = null

    constructor() {
        MongoHelper.setMongoUrl(process.env.MONGO_DB_URI)
    }

    async create(data) {
        if (!this.storage) await this.setStorage()
        this.storage.insertOne(data)
    }
    
    async update(data, id) {
        if (!this.storage) await this.setStorage()
        await this.storage.updateOne({_id: MongoHelper.ObjectID(id)}, { $set: data })
    }
    
    async delete(id) {
        if (!this.storage) await this.setStorage()
        await this.storage.deleteOne({_id: MongoHelper.ObjectID(id)})
    }

    async list() {
        if (!this.storage) await this.setStorage()
        const data = await this.storage.find({}).toArray()
        return(data)
    }

    async get(id) {
        if (!this.storage) await this.setStorage()
        return this.storage.findOne({_id: MongoHelper.ObjectID(id)})
    }

    async setStorage() {
        this.storage = await MongoHelper.getCollection(this.collectionName)
    }
}
