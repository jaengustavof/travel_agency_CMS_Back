const { sql } = require("slonik");

const selectAllHotels = () =>{
    return sql `
        SELECT * FROM hotels
    `
}

const selectOneHotel = ({hotel_name}) => {
    
    return sql ` 
        SELECT * FROM hotels
        WHERE hotel_name = ${hotel_name}
    `
}

const selectById = ({hotel_id}) =>{
    return sql `
        SELECT * FROM hotels
        WHERE hotel_id = ${hotel_id}
    `
}

const createOneHotel = ({hotel_name, hotel_city, hotel_address, h_cat_id}) =>{
    return sql `
        INSERT INTO hotels ("hotel_name", "hotel_city", "hotel_address", "h_cat_id")
        VALUES(${hotel_name}, ${hotel_city}, ${hotel_address}, ${h_cat_id})
    `;
}

const updateOneHotel = ({hotel_id, hotel_name, hotel_city, hotel_address, h_cat_id}) =>{

    return sql `
      
        update hotels
        SET hotel_name = ${hotel_name}, hotel_city = ${hotel_city}, hotel_address = ${hotel_address}, h_cat_id = ${h_cat_id}
        WHERE hotel_id = ${hotel_id}
    `
}

const removeOneHotel =({hotel_id}) =>{

    return sql `
        DELETE FROM hotels
        WHERE hotel_id = ${hotel_id}
    `
}

module.exports = {
    selectAllHotels,
    selectOneHotel,
    selectById,
    createOneHotel,
    updateOneHotel,
    removeOneHotel
}