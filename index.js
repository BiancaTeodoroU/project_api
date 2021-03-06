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

app.use('/static', express.static('./src/domain/view'))


app.use(rotas)

app.use('/', (req,res) => {
    res.send('Olá')
})

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));