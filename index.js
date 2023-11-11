const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const fucionarioRoutes = require('./routes/funcionario.js')
const server = express()
server.use(cors())
server.use(express.json())

server.use(
    express.urlencoded({
        extended:true
    })
)

server.use('/funcionario', fucionarioRoutes)

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nnrk6ri.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    )
    .then(()=>{
        console.log("Conexao efetuada com sucesso");
    })
    .catch((err)=>{
        console.log(err);
    })

server.listen(3001, ()=> console.log("Rodando na porta 3001"))