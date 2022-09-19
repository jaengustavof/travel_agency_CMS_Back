const { getLoginUser } = require("../../queries/auth");
const { getOneUser } = require("../../queries/users")
const { hash, serialize } = require("../../utils");
const { login } = require("../../errors/auth"); 
const errors = require("../../errors/commons");
const userErrors = require("../../errors/users")


module.exports = (db) => async (req, res, next) => {
    const { user_email, user_password } = req.body;

    const user = await getOneUser(db)({user_email})
    if(!user.data) return next(userErrors[404])

    const queryResult = await getLoginUser(db)({
      user_email,
      compareFn: hash.compare(user_password),
    }); 


    console.log(user)

    if(!queryResult.ok) return next(login[queryResult.code] || errors[500]);

    serialize(res, {email: queryResult.data.email})

    res.status(200).json({
      success: true,
      message: "Loged in",
      data: user.data,
    });
  };