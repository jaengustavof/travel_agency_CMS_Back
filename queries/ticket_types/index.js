const { selectAllTypes, selectOneType, createOneType, selectOneId, updateOneType, removeOneType } = require("./queries");
const { queryCatcher } = require("../utils")

const getAllTypes = (db) => async () => {
    return await queryCatcher(db.query, "getAllTypes")(selectAllTypes());
}

const getOneType = (db) => async({ticket_type_name}) => {
    return await queryCatcher(db.maybeOne, "getOneType")(selectOneType({ticket_type_name}))
}

const getById = (db) => async({ticket_type_id}) => {
    return await queryCatcher(db.maybeOne, "getById")(selectOneId({ticket_type_id}));
}

const createType = (db) => async({ticket_type_name}) => {
    return await queryCatcher(db.query, "createType")(createOneType({ticket_type_name}))
}

const updateType = (db) => async ({ticket_type_id, ticket_type_name}) => {
    return await queryCatcher(db.query, "updateType")(updateOneType({ticket_type_id, ticket_type_name}))
}

const removeType = (db) => async({ticket_type_id})=>{
    return await queryCatcher(db.query, "removeType")(removeOneType({ticket_type_id}))
}

module.exports = {
    getAllTypes,
    getOneType,
    createType,
    getById,
    updateType,
    removeType
}