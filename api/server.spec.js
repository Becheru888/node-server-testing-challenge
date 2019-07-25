const server = require('./server');
const request = require('supertest')

describe('server', () =>{
    it('GET WORKS?', () =>{
        return request(server)
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).toBeInstanceOf(Array);
        });
    });
});


describe('server', () =>{
    it('ADD WORKS?', () =>{
        return request(server)
        .post('/api/users/add')
        .send({firstName: 'John',lastName:'Snow'})
        .expect(200)
        .expect('Content-Type', /json/)  
        .expect(function(res) {
            res.body.firstName = 'John';
            res.body.lastName = 'Snow'
          })
    });
});



