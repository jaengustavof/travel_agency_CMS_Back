const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    register: ['user_name', 'user_last', 'user_email', 'user_password', 'user_phone', 'role_name'],
    
  }

module.exports = (db) => {
    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.register), require("../auth/register")(db))
    router.post("/update", require("./update")(db))
    return router
}