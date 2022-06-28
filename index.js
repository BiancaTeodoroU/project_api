const express = require ("express")
const bodyParser = require ("body-parser")
const rotas = require ("./src/domain/imports/dinamicimport") 
// const rotas = require('./src/domain/imports/routes')

let app = express ()
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})

app.use(rotas)

app.listen(8080, () => console.log("http://localhost:8080"))