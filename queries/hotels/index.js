const { selectAllHotels,selectOneHotel, selectById,createOneHotel, updateOneHotel, removeOneHotel } = require("./queries");
const { queryCatcher } = require("../utils");

const getAllHotels = (db) => async () =>{
    return await queryCatcher(db.query, "getAllHotels")(selectAllHotels());
}

const getOneHotel = (db) => async({hotel_name}) =>{
    
    return await queryCatcher(
        db.maybeOne,
        "getOneHotel"
    )(selectOneHotel({hotel_name}))
};

const getOneId= (db) => async({hotel_id}) =>{
    
    return await queryCatcher(
        db.maybeOne,
        "getOneId"
    )(selectById({hotel_id}))
};


const createHotel = (db) => async({hotel_name, hotel_city, hotel_address, h_cat_id}) =>{
    return await queryCatcher(db.query, "createHotel")(createOneHotel({hotel_name, hotel_city, hotel_address, h_cat_id}))
}

const updateHotel = (db) => async({hotel_id, hotel_name, hotel_city, hotel_address, h_cat_id}) =>{
    return await queryCatcher(db.query, "updateHotel")(updateOneHotel({hotel_id, hotel_name, hotel_city, hotel_address, h_cat_id}))
}

const removeHotel = (db) => async({hotel_id}) => {
    return await queryCatcher(db.query, "removeHotel")(removeOneHotel({hotel_id}));

}


module.exports = {
    getAllHotels,
    getOneHotel,
    getOneId,
    createHotel,
    updateHotel,
    removeHotel
}