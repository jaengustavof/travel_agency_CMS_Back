const { getOneHotel, createHotel } = require("../../queries/hotels");
const errors = require("../../errors/hotels")

module.exports = (db) => async (req, res, next) =>{

    const { hotel_name, hotel_city, hotel_address, h_cat_id } = req.body
    
    const hotel = await getOneHotel(db)({hotel_name});
    if(hotel.data) return next(errors[401])

    const queryResult = await createHotel (db)({hotel_name, hotel_city, hotel_address, h_cat_id })
    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: "New Hotel Created"
      });
}