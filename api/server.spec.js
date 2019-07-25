const server = require('./server');
const request = require('supertest')

describe('server', () =>{
    it('GET WORKS?', () =>{
        return request(server)
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /json/)  
    });
});



