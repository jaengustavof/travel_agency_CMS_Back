const { getOneId, removeHotel } = require("../../queries/hotels")
const errors = require("../../errors/hotels");

module.exports = (db) => async (req, res, next) => {

    const { hotel_id } = req.body;

    const hotel = await getOneId(db)({hotel_id})
    if(!hotel.data) return next(errors[404])

    const queryResult = await removeHotel(db)({hotel_id})
    if(!queryResult.ok) return next(errors[400])


    res.status(200).json({
        success: true,
        message: "Hotel Deleted"
    })
}