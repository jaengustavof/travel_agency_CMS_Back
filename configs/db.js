const slonik = require("slonik");
const { DB_URL } = require('../enviroments')
// en las versiones nuevas hay que poner await porque es un apromesa// Da el error fn is not a function

module.exports = slonik.createPool(DB_URL);