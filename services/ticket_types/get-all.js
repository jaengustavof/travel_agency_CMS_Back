const { getAllTypes } = require("../../queries/ticket_types");
const errors = require("../../errors/ticket_types")


module.exports = (db) => async(req, res, next) => {

    const queryResult = await getAllTypes(db)();
    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: queryResult.data
    })
}