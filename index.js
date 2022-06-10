const express = require ("express")
const bodyParser = require ("body-parser")
const rotas = require ("./src/domain/imports/dinamicimport")

let app = express ()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(rotas)

app.listen(8080, () => console.log("http://localhost:8080"))