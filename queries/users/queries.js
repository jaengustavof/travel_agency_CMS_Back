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

const updateOneUser = ({user_id, user_name, user_last, user_email, user_password, user_phone, role_name}) => {
    console.log(user_id, user_name, user_last, user_email, user_password, user_phone, role_name)
    return sql `
        UPDATE users
        SET user_name = ${user_name}, user_last = ${user_last}, user_email = ${user_email}, user_password = ${user_password}, user_phone = ${user_phone}, role_id = (SELECT role_id FROM roles WHERE role_name = ${role_name})
        WHERE user_id = ${user_id};
    `
}

const deleteOneUser =({user_email}) => {
    return sql ` 
        DELETE FROM users
        WHERE user_email = ${user_email};
    `
}

module.exports = {
    selectAllUsers,
    selectOneUser,
    updateOneUser,
    deleteOneUser
}