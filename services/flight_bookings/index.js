const router = require("express").Router();
const { checker } = require("../../middlewares")

const forms = {
    create: ['ticket_type_name'],
    update: ['ticket_type_id', 'ticket_type_name'],
    remove: ['ticket_type_id']    
}


module.exports = (db) => {

    router.get("/get-all", require("./get-all")(db));
    router.post("/create", require("./create")(db));
    router.post("/update", require("./update")(db));
    router.post("/remove", require("./remove")(db));
    
    return router;
}

