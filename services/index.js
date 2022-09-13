const router = require("express").Router();

module.exports = (db) => {
    router.use("/auth", require("./auth")(db));
    router.use("/users", require("./users")(db));/* notas */
    router.use("/flight_bookings", require("./flight_bookings")(db))
    router.use("/flights", require("./flights")(db))

    return router;
};