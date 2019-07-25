const db = require('../data/dbConfig');

module.exports = {
    insert,
    getAll
  };


  async function insert(user) {
    const [id] = await db('users').insert(user);
  
    return db('users').where({ id }).first();
  }

  function getAll() {
    return db('users');
  }