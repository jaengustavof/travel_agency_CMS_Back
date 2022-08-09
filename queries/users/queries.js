const {sql} = require("slonik");

const selectAllUsers = () => {
    return sql `
        SELECT * FROM users
    `
}

const selectOneUser = ({user_email}) => {
    return sql `
        SELECT * FROM users
        WHERE user_email = ${user_email}
    `
}

module.exports = {
    selectAllUsers,
    selectOneUser
}