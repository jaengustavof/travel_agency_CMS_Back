const { getAllCategories } = require("../../queries/hotel_categories");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) =>{
    
    const queryResult = await getAllCategories(db)();

    if(!queryResult.ok) return next(errors[400]);

    res.status(200).json({
      success: true,
      message: queryResult.data
    });
}