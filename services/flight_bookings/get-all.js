const { getAllBookings } = require("../../queries/flight_bookings");
const errors = require("../../errors/flight_bookings")

module.exports = (db) => async (req, res, next) =>{

    const queryResult = await getAllBookings(db)();
    if(!queryResult.ok) return next(errors[400]);


    res.status(200).json({
        success: true,
        data: queryResult.data

    })
}