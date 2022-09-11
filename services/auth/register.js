const { createUser } = require("../../queries/auth");
const { hash, sendEmail } = require("../../utils");
const { register } = require("../../errors/auth");
const errors =  require("../../errors/commons");


module.exports = (db) => async (req, res, next) => {

    const {user_name, user_last, user_email, user_password, user_phone, role_name} = req.body;
    const queryResult = await createUser(db)({
        user_name, 
        user_last, 
        user_email, 
        user_password: await hash.encrypt(user_password),
        user_phone, 
        role_name
    })

    if(!queryResult.ok) return next(register[queryResult.code] || errors[500]);

    const message = "Thank you for choosing our app. You may now proceed to Login.";

    try {
        await sendEmail({ 
            email: user_email,
            subject: 'Welcome to our App',
            message,
        })
    } catch (error) {
        console.log('> error: ', error.message);
    }

    res.status(200).json({
        success: true,
        message: "User Registered correctly"
    })
}