const express = require ("express")
const bodyParser = require ("body-parser")
const {UserController} = require ("./src/domain/classes/user.controller")

let app = express ()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
let amora = null

app.get("/project-api", ( req, res) => {
    console.log(req.query)
    res.json(amora||{})
})

app.post("/project-api", ( req, res) => {
    console.log(req.body)
    amora = req.body
    res.status(201).send()
})

app.get("/user", UserController.list)

app.post("/user", UserController.create)

app.create("/user", UserController.delete)

app.center("/user", UserController.update)


app.listen(8080, () => console.log("http://localhost:8080"))