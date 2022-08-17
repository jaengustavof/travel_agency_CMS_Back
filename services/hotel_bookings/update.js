const { getOneBooking, updateBooking } = require("../../queries/hotel_bookings");
const errors = require("../../errors/hotel_bookings")


module.exports = (db) => async (req, res, next) =>{

    const {hotel_id, user_id, booking_id, booking_from, booking_to, booking_price} = req.body

    const booking = await getOneBooking(db)({booking_id})
    if(!booking.data) return next(errors[404]);

    const queryResult = await updateBooking(db)({hotel_id, user_id, booking_id, booking_from, booking_to, booking_price})
    if(!queryResult.ok) return next(errors[400]);


    res.status(200).json({
        success: true,
        message: "Booking Updated"
    })
}