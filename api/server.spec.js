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
        .expect('Content-Type', /json/)  
        .then(req => {
            expect(req.body).toBeInstanceOf(Object);
        })
    });
});


describe('server', () =>{
    it('DELETE WORKS?', () =>{
        return request(server)
        .post('/api/users/:id')
    });
});
