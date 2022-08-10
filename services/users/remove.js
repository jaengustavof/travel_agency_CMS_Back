const { deleteUser, getOneUser } = require("../../queries/users");
const errors = require("../../errors/users");

module.exports = (db) => async (req, res, next) =>{

    const { user_email } = req.body 
    
    const user = await getOneUser(db)({user_email})

    if(!user.data) return next(errors[404])

    const queryResult = await deleteUser(db)({user_email})

    if(!queryResult.ok) return next(errors[500])


    res.status(200).json({
        success: true,
        message: "User Removed"
    })
}