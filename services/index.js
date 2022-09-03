const router = require("express").Router();

module.exports = (db) => {
    router.use("/air_carriers", require("./air_carriers")(db));
    router.use("/auth", require("./auth")(db));
    router.use("/users", require("./users")(db));/* notas */
    router.use("/hotel_categories", require("./hotel_categories")(db))
    router.use("/hotels", require("./hotels")(db));
    router.use("/hotel_bookings", require("./hotel_bookings")(db));
    router.use("/ticket_types", require("./ticket_types")(db));
    router.use("/flight_bookings", require("./flight_bookings")(db))
    router.use("/flights", require("./flights")(db))

    return router;
};