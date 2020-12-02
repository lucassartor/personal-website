const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
let path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const projects = require('./routes/projects');


require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Configurando Eta e public
app.set('view engine', 'ejs');
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname,"public")));

//Rotas
app.use(index);
app.use("/projects", projects);

//Banco
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Banco conectado!");
    })
    .catch((error) => {
        console.log("Erro no banco: " + error);
    });

module.exports = app;