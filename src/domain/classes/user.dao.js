const {Dal} = require("./dal")

module.exports.UserDao = class UserDao extends Dal {
    constructor() {
        super()
        this.storage = new Map()
    }
}

