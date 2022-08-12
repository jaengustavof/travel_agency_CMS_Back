const { updateHotel,getOneId } = require("../../queries/hotels");
const errors = require("../../errors/hotels");


module.exports = (db) => async(req, res, next) =>{

    const { hotel_id, hotel_name, hotel_city, hotel_address, h_cat_id } = req.body
    
    const hotel = await getOneId(db)({hotel_id});
    if(!hotel.data) return next(errors[404]);

    const queryResult = await updateHotel(db)({hotel_id, hotel_name, hotel_city, hotel_address, h_cat_id})
    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        message: "Hotel updated"
    })
}