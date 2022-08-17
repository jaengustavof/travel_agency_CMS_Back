const router = require("express").Router();
const { checker } = require("../../middlewares");


const forms = {
    create: ['hotel_name', 'hotel_city', 'hotel_address', 'h_cat_id'],
    update: ['hotel_id', 'hotel_name', 'hotel_city', 'hotel_address', 'h_cat_id' ],
    remove: ['hotel_id']
}

module.exports = (db) => {
    router.get("/get-all", require("./get-all")(db));
    router.post("/create", require("./create")(db));
    router.post("/update", require("./update")(db));
    router.post("/remove", require("./remove")(db));

    return router
}
