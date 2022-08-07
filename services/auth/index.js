const router = require("express").Router();
const { authorizer, checker } = require("../../middlewares");

const forms = {
  register: ['user_name', 'user_last', 'user_email', 'user_password', 'user_phone', 'role_name'],
  login: ['user_email', 'user_password'],
}

module.exports = (db) => {
  router.post("/register", checker(...forms.register), require("./register")(db))
  router.post("/login", checker(...forms.login), require("./login")(db));
  router.post("/logout", authorizer, require("./logout")());

  return router;
};