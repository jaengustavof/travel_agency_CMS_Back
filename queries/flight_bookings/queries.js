const { sql } = require("slonik");

const selectAllBookings = () => {
    return sql `
        SELECT * FROM flight_bookings
        JOIN users
        ON flight_bookings.user_id = users.user_id

    `
}

const selectOneBooking = ({booking_id}) => {
    return sql `
        SELECT * FROM flight_bookings
        JOIN users
        ON flight_bookings.user_id = users.user_id

        WHERE booking_id = ${booking_id}
    `
}

const createOneBooking = ({user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}) =>{
    return sql `
        INSERT INTO flight_bookings (user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price)
        VALUES (${user_id}, ${booking_id}, ${booking_departure}, ${booking_return}, ${booking_from}, ${booking_to}, ${booking_price})
    `
}

const updateOneBooking = ({user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}) => {
    
    return sql `
        UPDATE flight_bookings
        SET user_id = ${user_id}, booking_departure = ${booking_departure}, booking_return = ${booking_return}, booking_from = ${booking_from}, booking_to = ${booking_to}, booking_price = ${booking_price}
        WHERE booking_id = ${booking_id}
    `
}

const removeOneBooking = ({booking_id}) => {
    
    return sql `
        DELETE FROM flight_bookings
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