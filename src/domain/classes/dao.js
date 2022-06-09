const {Dal} = require("./dal")

module.exports.UserDao = class UserDao extends Dal {
    constructor() {
        super()
        this.storage = new Map()
    }
}

module.exports.VeiculoDao = class VeiculoDao extends Dal {
    constructor() {
        this.storage = new Map()
    }

    list(marca) {
        const array = Array.from(this.storage.values())
        return array.filter(veiculo => veiculo.marca === marca)
    }
}

module.exports.TesteDao = class TesteDao extends Dal {}