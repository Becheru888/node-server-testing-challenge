
const express = require('express')

const Users = require('../users/users-model')

const server =  express()

server.use(express.json());

server.get('/api/users', (_, res) => {
    Users.getAll()
    .then(users =>{
        res.status(200).json(users)
    }).catch(error => {
        const err = {
            message: error.message,
            stack: error.stack
        };
        res.status(500).json(err)
    })
  });


  server.post('/api/users/add', (req, res) =>{
    const newUser = req.body
    Users.insert(newUser)
    .then(user =>{
        res.status(200).json(user)
    }).catch(error =>{
        res.status(500).json(error)
    })
  })

module.exports = server;