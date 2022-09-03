const { createBooking } = require("../../queries/flight_bookings");
const errors = require("../../errors/flight_bookings")

module.exports = (db) => async (req, res, next) =>{

    const { 
        user_id, 
        booking_id, 
        booking_departure, 
        booking_return, 
        booking_from, 
        booking_to, 
        booking_price 
    } = req.body

    const queryResult = await createBooking(db)({
        user_id, 
        booking_id, 
        booking_departure, 
        booking_return, 
        booking_from, 
        booking_to, 
        booking_price })

        if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: "Booking Created"
    });

}