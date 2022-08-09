const router = require("express").Router();

module.exports = (db) => {
    router.use("/air_carriers", require("./air_carriers")(db));
    router.use("/auth", require("./auth")(db));
    router.use("/users", require("./users")(db));
    return router;
};