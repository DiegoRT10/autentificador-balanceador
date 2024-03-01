const express = require('express');
const router = express.Router();
const mysqlConection = require('../connection/connection');
const jwt = require('jsonwebtoken');
const key = process.env.secret_key;
const Token = require('../tools/verifyToken');
const axios = require('axios');
require('dotenv').config();
const microserverGame =  process.env.MICROSERVER_GAME;


router.get('/catalogo-game',Token.Verify,(req, res) => {
    console.log('holaaa');

    axios.get(microserverGame)
    .then(response => {
      console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error.message);
    });
});


router.get('/prestamo',Token.Verify,(req, res) => {
  console.log('holaaa');

  axios.get("https://api.prestamoscalderon.com:3001/usuario/singin")
  .then(response => {
    console.log(response.data);
      res.json(response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error.message);
  });
});



//Read
router.get('/catalogo-game',Token.Verify,(req, res) => {
    console.log('holaaa');

    axios.get(microserverGame)
    .then(response => {
      console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error.message);
    });
});



module.exports = router;