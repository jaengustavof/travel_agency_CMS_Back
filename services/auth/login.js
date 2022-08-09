const { getLoginUser } = require("../../queries/auth");
const { hash, serialize } = require("../../utils");
const { login } = require("../../errors/auth"); 
const errors = require("../../errors/commons");


module.exports = (db) => async (req, res, next) => {
    const { user_email, user_password } = req.body;

    const queryResult = await getLoginUser(db)({
      user_email,
      compareFn: hash.compare(user_password),
    });

    

    if(!queryResult.ok) return next(login[queryResult.code] || errors[500]);

    serialize(res, {email: queryResult.data.email})
    console.log(res)

    res.status(200).json({
      success: true,
      message: "Loged in"
    });
  };