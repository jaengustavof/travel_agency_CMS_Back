const { sql } = require("slonik");

const selectAllCategories = () =>{
    return sql `
        SELECT * FROM hotel_categories
    `
}

const selectOneCategory = ({h_cat_name}) =>{

    return sql `
        SELECT * FROM hotel_categories
        WHERE h_cat_name = ${h_cat_name}
    `
}

const selectOneCatByUuid = ({h_cat_id}) =>{
    return sql `
    SELECT * FROM hotel_categories
    WHERE h_cat_id = ${h_cat_id} 
`
}

const insertOneCategory = ({h_cat_name}) =>{
    return sql `
        INSERT INTO hotel_categories (h_cat_name)
        VALUES (${h_cat_name.toLowerCase()})
    `
}

const updateOneCategory = ({h_cat_id, h_cat_name}) => {
    return sql `
        UPDATE hotel_categories
        SET h_cat_name = ${h_cat_name}
        WHERE h_cat_id = ${h_cat_id}
    
    `
}

const removeOneCategory = ({h_cat_id}) =>{
    return sql `
        DELETE FROM hotel_categories
        WHERE h_cat_id = ${h_cat_id}
    `
}

module.exports = {
    selectAllCategories,
    selectOneCategory,
    selectOneCatByUuid,
    insertOneCategory,
    updateOneCategory,
    removeOneCategory,
}