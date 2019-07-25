const db = require('../data/dbConfig');

module.exports = {
    insert,
    getAll,
    remove
  };


  async function insert(user) {
    const [id] = await db('users').insert(user);
  
    return db('users').where({ id }).first();
  }

  function getAll() {
    return db('users');
  }

  function remove(id) {
    return db('users')
      .where({ id })
      .del();
  }
  