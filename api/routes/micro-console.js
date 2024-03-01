const express = require('express');
const router = express.Router();
const mysqlConection = require('../connection/connection');
const jwt = require('jsonwebtoken');
const key = process.env.secret_key;
const Token = require('../tools/verifyToken');
const axios = require('axios');
require('dotenv').config();
const microserverConsole =  process.env.MICROSERVER_CONSOLE;


router.get('/catalogo-console',Token.Verify,(req, res) => {
    console.log('holaaa');

    axios.get(microserverConsole)
    .then(response => {
      console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error.message);
    });
});

module.exports = router;