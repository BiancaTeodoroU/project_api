const {Controller} = require("./controller");
const {UserDao} = require("./user.dao");

class UserController extends Controller {
    constructor() {
        super(new UserDao())
    }
}

module.exports.UserController = new UserController()
