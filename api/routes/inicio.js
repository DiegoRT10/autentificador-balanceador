const express = require('express');
const router = express.Router();
require('dotenv').config();


router.get('/',(reg, res) => {
    console.log('entre a la ruta ');
    res.send('¡Holaaaaa diegooo!');
});

  

module.exports = router;