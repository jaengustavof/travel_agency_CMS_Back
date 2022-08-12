
const { selectAllCategories, selectOneCategory,   selectOneCatByUuid,  insertOneCategory, updateOneCategory, removeOneCategory } = require("./queries");
const { queryCatcher } = require("../utils");


const getAllCategories = (db) => async() => {
    return await queryCatcher(db.query, "getAllCategories")(selectAllCategories());
}

const getOneCategory = (db) => async(h_cat_name) =>{
    return await queryCatcher(db.maybeOne, "getOneCategory")(selectOneCategory({h_cat_name}))
}

const getById = (db) => async(h_cat_id) =>{
    return queryCatcher(db.maybeOne, "getById")(selectOneCatByUuid({h_cat_id}))
}

const createCategory = (db) => async(h_cat_name) =>{
    return await queryCatcher(db.query, "createCategory")(insertOneCategory({h_cat_name}))
}

const updateCategory = (db) => async({h_cat_id, h_cat_name}) =>{
    return await queryCatcher(db.query, "updateCategory")(updateOneCategory({h_cat_id, h_cat_name}))
}

const removeCategory = (db) => async({h_cat_id}) =>{
    return await queryCatcher(db.query, "removeCategory")(removeOneCategory({h_cat_id})) 
}

module.exports = {
    getAllCategories,
    getOneCategory,
    getById,
    createCategory,
    updateCategory,
    removeCategory
}