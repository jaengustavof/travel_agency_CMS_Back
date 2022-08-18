const { getById, removeType } = require("../../queries/ticket_types");
const errors = require("../../errors/ticket_types")

module.exports = (db) => async (req, res, next) => {

    const { ticket_type_id } = req.body

    const ticket = await getById(db)({ticket_type_id});
    if(!ticket.data) return next(errors[404])

    const queryResult = await removeType(db)({ticket_type_id});
    if(!queryResult.data) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: "Ticket Type Removed"
    })
}