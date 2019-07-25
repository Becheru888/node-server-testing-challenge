const db = require('../data/dbConfig');

module.exports = {
    insert,
    getAll
  };


  async function insert(hobbit) {
    const [id] = await db('users').insert(hobbit);
  
    return db('users').where({ id }).first();
  }

  function getAll() {
    return db('hobbits');
  }