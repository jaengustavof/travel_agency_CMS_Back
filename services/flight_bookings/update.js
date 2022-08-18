const { getOneBooking, updateBooking } = require("../../queries/flight_bookings");
const errors = require("../../errors/flight_bookings")

module.exports = (db) => async (req, res, next) => {

    const {
        carrier_id, 
        user_id, 
        ticket_type_id, 
        booking_id, 
        booking_departure, 
        booking_return, 
        booking_from, 
        booking_to, 
        booking_price} = req.body

    const booking = await getOneBooking(db)({booking_id});
    if(!booking.data) return next(errors[404])

    const queryResult = await updateBooking(db)({carrier_id, 
        user_id, 
        ticket_type_id, 
        booking_id, 
        booking_departure, 
        booking_return, 
        booking_from, 
        booking_to, 
        booking_price})
    
    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: " Flight Booing Updated"
    })
}