const express = require('express');
const router = express.Router();
const mysqlConection = require('../connection/connection');
require('dotenv').config();
const Token = require('../tools/verifyToken');

//LISTA TODOS LOS CLIENTES
router.get('/', Token.Verify, (reg, res) => {
    mysqlConection.query('select * from cliente', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
           
        } else {
            console.log(err);
        }
    })
});

router.get('/deudores',Token.Verify,(req, res) => {
    mysqlConection.query("select c.id id_cliente, c.dpi, c.nombre, c.direccion, c.telefono, c.foto_dpi, p.id id_prestamo, p.tipo, p.monto, p.total_pagar, p.abonado, p.fecha_inicio, p.fecha_finalizacion, p.estado, p.renovacion, p.descuento, p.garantia from cliente c inner join prestamo p on c.id = p.id_cliente where p.estado = '1' or p.estado = '3';", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
  });
  

module.exports = router;