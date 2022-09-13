const enviroment = require(`./${process.env.NODE_ENV || "local"}`);


module.exports = enviroment;