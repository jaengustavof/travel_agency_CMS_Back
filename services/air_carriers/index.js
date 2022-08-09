const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    create_create: ['carrier_name', 'carrier_logo', 'carrier_iata'],
    remove: ['carrier_iata']
    
}

module.exports = (db) => {

    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.create_create), require("./create")(db));
    router.post("/update", checker(...forms.create_create),require("./update")(db))
    router.post("/remove", checker(...forms.remove),require("./remove")(db));
    return router;
}