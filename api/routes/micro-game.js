const express = require('express');
const router = express.Router();
const mysqlConection = require('../connection/connection');
const jwt = require('jsonwebtoken');
const key = process.env.secret_key;
const Token = require('../tools/verifyToken');
const axios = require('axios');
require('dotenv').config();
const microserverGame =  process.env.MICROSERVER_GAME;

//Create
router.post('/insert', Token.Verify, async (req, res) => {
  try {
    
    const response = await axios.post(`${microserverGame}/catalogo/insert`, req.body);
    console.log(response.data);
    res.status(200).send('Solicitud exitosa');
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

//Read
router.get('/catalogo-game',Token.Verify,(req, res) => {
    console.log('holaaa');

    axios.get(`${microserverGame}/catalogo/game`)
    .then(response => {
      console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error.message);
    });
});










module.exports = router;