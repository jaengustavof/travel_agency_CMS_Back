const { getOneUser, updateUser } = require("../../queries/users");
const errors = require("../../errors/users")

module.exports = (db) => async (req, res, next) => {

    const {user_id, user_name, user_last, user_email, user_password, user_phone, role_name} = req.body;

    const user = await getOneUser(db)({user_email})

    if(!user.data) return next(errors[404])
    
    const queryResult = await updateUser(db)({
        user_id,
        user_name, 
        user_last, 
        user_email, 
        user_password, 
        user_phone, 
        role_name
    })

    if(!queryResult.ok) return next(errors[500])


    res.status(200).json({
        success: true,
        message: queryResult
    })
}