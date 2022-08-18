const router = require("express").Router();
const { checker } = require("../../middlewares")

const forms = {
    createUpdate: ['hotel_id', 'user_id', 'booking_id', 'booking_from', 'booking_to', 'booking_price'],
    remove: ['booking_id']
}

module.exports = (db) => {

    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.createUpdate), require("./create")(db));
    router.post("/update", checker(...forms.createUpdate), require("./update")(db));
    router.post("/remove", checker(...forms.remove      ),require("./remove")(db));

    return router;
}