const express = require('express');
const path = require('path');
const { createEngine } = require('express-react-views');
const index = require('./routes/index');

const app = express();

//Configurando react-views
app.set('views', path.resolve( __dirname + '/views'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

//Rotas
app.use(index);

module.exports = app;