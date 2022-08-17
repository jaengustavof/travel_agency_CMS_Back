const { createBooking } = require("../../queries/hotel_bookings");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {

    const {hotel_id, user_id, booking_id, booking_from, booking_to, booking_price} = req.body;

    const queryResult = await createBooking(db)({hotel_id, user_id, booking_id, booking_from, booking_to, booking_price})
    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: "Booking created"
    })
}