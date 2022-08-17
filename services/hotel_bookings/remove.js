const {getOneBooking, removeBooking} = require("../../queries/hotel_bookings")
const errors = require ("../../errors/hotel_bookings");

module.exports = (db) => async (req, res, next) => {

    const {booking_id} = req.body;

    const booking = await getOneBooking(db)({booking_id})
    if(!booking.data) return next(errors[404]);

    const queryResult = await removeBooking(db)({booking_id})
    if(!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: "Booking removed"
    })
}