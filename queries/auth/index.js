const { selectUser, insetUser } = require("./queries");
const { queryCatcher } = require("../utils");


const getUser =(db) => async ({ user_email }) => {
    return await queryCatcher(db.maybeOne,"getFullUser")(selectUser({ user_email }));
  };

const createUser = (db) => async ({user_name, user_last, user_email, user_password, user_phone, role_name}) => {

    const user = await getUser(db)({user_email});

    if(user.data.length){
        return {
            ok: false,
            code: "duplication"
        };
    }

    return await queryCatcher (db.query, "createUser")(insetUser({user_name, user_last, user_email, user_password, user_phone, role_name}));
}

const getLoginUser = (db) => async ({ user_email, compareFn }) => {
    const user = await getUser(db)({user_email});

    if(!user.data)
        return{
            ok: false,
            code: "unknown"
        };

    console.log(user.data.user_password)
    const checkPassword = await compareFn(user.data.user_password);

    if(!checkPassword)
        return {
            ok: false,
            code: "unknown"
        }


    return {
        ok: true,
        data: { email: user.data.user_email}
    }

}

module.exports = {
    getUser,
    createUser,
    getLoginUser,
}