const { selectAllUsers, selectOneUser, updateOneUser, deleteOneUser } = require("../../queries/users/queries");
const { queryCatcher } = require("../utils");

const getAllUser = (db) => async () =>{
    return await queryCatcher(db.query, "getAllUser")(selectAllUsers());
}

const getOneUser = (db) => async({user_email}) => {
    return await queryCatcher(db.maybeOne, "getOneUser")(selectOneUser({user_email}))
}

const updateUser = (db) => async({user_id, user_name, user_last, user_email, user_password, user_phone, role_name}) => {

    return await queryCatcher(db.query, "updateUser")(updateOneUser({
        user_id, 
        user_name, 
        user_last, 
        user_email, 
        user_password, 
        user_phone, 
        role_name
    }))
}

const deleteUser = (db) => async ({user_email}) => {
    return await queryCatcher(db.query, "deleteUser")(deleteOneUser({user_email}))
}



module.exports = {
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser
}