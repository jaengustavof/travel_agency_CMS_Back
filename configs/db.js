const slonik = require("slonik");
// en las versiones nuevas hay que poner await porque es un apromesa// Da el error fn is not a function

module.exports = slonik.createPool(process.env.DB_URL);