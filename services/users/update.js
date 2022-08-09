const { getOneUser } = require("../../queries/users");
const errors = require("../../errors/users")

module.exports = (db) => async (req, res, next) => {

    const {user_name, user_last, user_email, user_password, user_phone, role_name} = req.body;

    const user = await getOneUser(db)({user_email})
    console.log(user.data)

    //// Pendiente continuar con updte ueser


    res.status(200).json({
        success: true,
        message: "Test User Update"
    })
}