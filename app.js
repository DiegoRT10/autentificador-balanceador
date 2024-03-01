const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

//ROUTS
const useRouteInicio = require('./api/routes/inicio');
const useRouteUsuario = require('./api/routes/usuario');
const useRouteMicroGame = require('./api/routes/micro-game');


app.use('/inicio',useRouteInicio);
app.use('/usuario',useRouteUsuario);
app.use('/micro-game',useRouteMicroGame);





module.exports = app; 