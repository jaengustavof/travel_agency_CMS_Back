const { sql } = require("slonik");


const selectAllBookings = () =>{
    return sql `
    SELECT *
    FROM hotel_bookings
    JOIN hotels
    ON hotel_bookings.hotel_id = hotels.hotel_id
    JOIN users
    ON hotel_bookings.user_id = users.user_id

    `
}

const selectOneBooking = ({booking_id}) => {
 
    return sql `
    SELECT hotel_name, user_email, booking_id, booking_from, booking_to, booking_price
    FROM hotel_bookings
    JOIN hotels
    ON hotel_bookings.hotel_id = hotels.hotel_id
    JOIN users
    ON hotel_bookings.user_id = users.user_id
    WHERE booking_id  = ${booking_id}
    `
}

const createOneBooking = ({hotel_id, user_id, booking_id, booking_from, booking_to, booking_price}) => {
    return sql ` 
        INSERT INTO hotel_bookings (hotel_id, user_id, booking_id, booking_from, booking_to, booking_price)
        VALUES (${hotel_id}, ${user_id}, ${booking_id}, ${booking_from}, ${booking_to}, ${booking_price})
    `
}

const updateOneBooking =({hotel_id, user_id, booking_id, booking_from, booking_to, booking_price}) =>{
    return sql `
        UPDATE hotel_bookings
        SET hotel_id = ${hotel_id}, user_id = ${user_id}, booking_from = ${booking_from}, booking_to = ${booking_to}, booking_price = ${booking_price}
        WHERE booking_id = ${booking_id}
    `
}

const removeOneBooking = ({booking_id}) =>{
    return sql `
        DELETE FROM hotel_bookings
        WHERE booking_id = ${booking_id}
    `
}


module.exports = {
    selectAllBookings,
    selectOneBooking,
    createOneBooking,
    updateOneBooking,
    removeOneBooking
    
}