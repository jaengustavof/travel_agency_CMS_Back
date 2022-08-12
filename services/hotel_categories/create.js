const { getOneCategory, createCategory } = require("../../queries/hotel_categories");
const errors = require("../../errors/categories")

module.exports = (db) => async(req, res, next) =>{

    const {h_cat_name} = req.body;
    
    const category = await getOneCategory(db)(h_cat_name)
    if(category.data) return next(errors[401])

    const queryResult = await createCategory(db)(h_cat_name);
    if(!queryResult.ok) return next(errors[400])


    res.status(200).json({
        success: true,
        message: "Hotel Category Created"
    })
}