const { selectAllUsers, selectOneUser } = require("../../queries/users/queries");
const { queryCatcher } = require("../utils");

const getAllUser = (db) => async () =>{
    return await queryCatcher(db.query, "getAllUser")(selectAllUsers());
}

const getOneUser = (db) => async({user_email}) => {
    return await queryCatcher(db.maybeOne, "getOneUser")(selectOneUser({user_email}))
}




module.exports = {
    getAllUser,
    getOneUser
}