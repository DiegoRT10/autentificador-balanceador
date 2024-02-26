const request = require('supertest');
const assert = require('assert');
const app = require('../../server');
const pool = require('../connection/connection'); 


let authToken; 

describe('Pruebas de API', () => {
  it('Debería obtener un token en POST /singin', (done) => {
    request(app)
      .post('/usuario/singin')
      .send({ email: 'user1@gmail.com', password: '123' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        authToken = res.body.token;
        assert.ok(authToken, 'Se espera que la respuesta contenga un token');
        done();
      });
  });


  it('Debería obtener datos con token en GET /', (done) => {
    request(app)
      .get('/usuario')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200, done);
  });


  after((done) => {
    pool.end((error) => {
      if (error) {
        console.error('Error al cerrar el pool de conexiones:', error);
      } else {
        console.log('Pool de conexiones cerrado exitosamente.');
      }
      
      done();
    });
  });

});