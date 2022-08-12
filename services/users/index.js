const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    register: ['user_name', 'user_last', 'user_email', 'user_password', 'user_phone', 'role_name'],
    update: ['user_id', 'user_name', 'user_last', 'user_email', 'user_password', 'user_phone', 'role_name'],
    remove: ['user_email']
  }

module.exports = (db) => {
    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.register), require("../auth/register")(db))
    router.post("/update", checker(...forms.update),require("./update")(db));
    router.post("/remove", checker(...forms.remove),require("./remove")(db));
    /*remove solo puede borrar el usuario si no tiene reservas || En cuanto se decida utilizar esta opcion se necesitara borrar todas las reservas que esten asignadas al usuario*/
    /*Change password?*/
    return router;

}