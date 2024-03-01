const express = require('express');
const router = express.Router();
require('dotenv').config();


router.get('/',(reg, res) => {
    console.log('entre a la ruta ');
    res.send('API AUTENTIFICADOR-BALANCEADOR!!!');
});

  

module.exports = router;