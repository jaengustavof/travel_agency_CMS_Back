const { cookie } = require("../../utils");

module.exports = () => (__, res) =>{
    cookie.clear(res);

    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}