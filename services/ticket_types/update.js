const {getOneType, getById, updateType} = require("../../queries/ticket_types");
const errors = require("../../errors/ticket_types")

module.exports = (db) => async (req, res, next) => {

    const {ticket_type_id, ticket_type_name} = req.body;

    const ticketId = await getById(db)({ticket_type_id});
    if(!ticketId.data) return next(errors[404]);

    const checkName = await getOneType(db)({ticket_type_name: ticket_type_name.toLowerCase()});
    if(checkName.data) return next(errors[401]);    

    const queryResult = await updateType(db)({ticket_type_id, ticket_type_name: ticket_type_name.toLowerCase()})
    if(!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: "Ticket Type Updated"
    })
}