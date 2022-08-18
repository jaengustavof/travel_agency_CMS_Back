const { getOneType, createType } = require("../../queries/ticket_types");
const errors = require("../../errors/ticket_types")

module.exports = (db) => async (req, res, next) =>{

    const { ticket_type_name } = req.body;
    const ticket = await getOneType(db)({ticket_type_name: ticket_type_name.toLowerCase()});
    if(ticket.data) return next(errors[401]);

    const queryResult = await createType(db)({ticket_type_name: ticket_type_name.toLowerCase()});
    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: `Ticket Type ${ticket_type_name} Created`
    })
}