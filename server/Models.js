//model.js (communicate with database)
const db = require('../database')

function getAll(callback) {
  // db.query(callback)
  db.Repo.find(callback).sort({forks_count:-1}).limit(25)
}


module.exports.getAll = getAll;