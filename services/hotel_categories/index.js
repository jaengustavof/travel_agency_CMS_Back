const router = require("express").Router();
const { checker } = require("../../middlewares")

const forms = {
    create: ['h_cat_name'],
    update: ['h_cat_id', 'h_cat_name'],
    remove: ['h_cat_id']
    
}

module.exports = (db) =>{

    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.create), require("./create")(db));
    router.post("/update", checker(...forms.update), require("./update")(db));
    router.post("/remove", checker(...forms.remove), require("./remove")(db));

    return router;
}