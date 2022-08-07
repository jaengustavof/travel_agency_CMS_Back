const { sql } = require("slonik");

const selectUser = ({user_email}) =>{
    return sql `
        SELECT * FROM users
        WHERE user_email = ${user_email}
    `;
}

const insetUser = ({user_name, user_last, user_email, user_password, user_phone, role_name}) => {
    return sql `
        INSERT INTO users (user_name, user_last, user_email, user_password, user_phone, role_id)
        VALUES (${user_name}, ${user_last}, ${user_email}, ${user_password}, ${user_phone}, (SELECT role_id FROM roles WHERE role_name = ${role_name}));
    `;
}

module.exports = {
    selectUser,
    insetUser,
}