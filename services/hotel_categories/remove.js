const { removeCategory, getById } = require("../../queries/hotel_categories");
const errors = require("../../errors/categories");

module.exports = (db) => async (req, res, next) => {

    const { h_cat_id } = req.body;

    const category = await getById(db)(h_cat_id)
    if(!category.data) return next(errors[404])

    const queryResult = await removeCategory(db)({h_cat_id})

    res.status(200).json({
        success: true,
        message: "Category Removed"
    })

}