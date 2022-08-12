const { updateCategory, getOneCategory, getById } = require("../../queries/hotel_categories");
const errors = require("../../errors/categories");

module.exports = (db) => async (req, res, next) =>{

    let { h_cat_id, h_cat_name } = req.body;
    h_cat_name = h_cat_name.toLowerCase()

    const category = await getById(db)(h_cat_id)
    if(!category.data) return next(errors[404])

    const categoryByName =  await getOneCategory(db)(h_cat_name)
    if(categoryByName.data) return next(errors[401])
    
    const queryResult = await updateCategory(db)({h_cat_id, h_cat_name})
    if(!queryResult.ok) return next(errors[400])

    return res.status(200).json({
        success: true,
        message: "Category Updated"
    })
} 