const { deserialize } = require("../utils");

module.exports = (req, res, next) => {
    const payload = deserialize(req);

    if(!payload) return next(errors[401]);

    res.locals = { ...payload }

    next()
}