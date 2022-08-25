const router = require("express").Router();

module.exports = (db) =>{
    router.get("/city-and-airport-search/:parameter", require("./city-and-airport-search")());
    router.post("/get_flight", require("./get_flight")());
    router.post("/flight-confirmation", require("./flight-confirmation")());
    router.post("/flight-booking", require("./flight-booking")())
  
    return router;
}