const https = require('https');
const app = require('./app');
const fs = require('fs');
require('dotenv').config();

const puerto = process.env.port || 3000;
const certPath = process.env.cert;
const keyPath = process.env.key;


const server =  app.listen(puerto, ()=>{
    console.log('Servidor disponible en https://localhost:'+puerto)
});

/*
const credentials = {
    cert: fs.readFileSync(certPath),
    key: fs.readFileSync(keyPath)
};

const server = https.createServer(credentials, app);

server.listen(puerto, (error) => {
    if (error) {
        console.error('Error al iniciar el servidor HTTPS:', error);
    } else {
        console.log('Servidor disponible en https://localhost:' + puerto);
    }
});
*/
