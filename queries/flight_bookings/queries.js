const { sql } = require("slonik");

const selectAllBookings = () => {
    return sql `
        SELECT * FROM flight_bookings
        JOIN users
        ON flight_bookings.user_id = users.user_id
        JOIN air_carriers
        ON flight_bookings.carrier_id = air_carriers.carrier_id
        JOIN ticket_types
        ON flight_bookings.ticket_type_id = ticket_types.ticket_type_id
    `
}

const selectOneBooking = ({booking_id}) => {
    return sql `
        SELECT * FROM flight_bookings
        JOIN users
        ON flight_bookings.user_id = users.user_id
        JOIN air_carriers
        ON flight_bookings.carrier_id = air_carriers.carrier_id
        JOIN ticket_types
        ON flight_bookings.ticket_type_id = ticket_types.ticket_type_id
        WHERE booking_id = ${booking_id}
    `
}

const createOneBooking = ({carrier_id, user_id, ticket_type_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}) =>{
    return sql `
        INSERT INTO flight_bookings (carrier_id, user_id, ticket_type_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price)
        VALUES (${carrier_id}, ${user_id}, ${ticket_type_id}, ${booking_id}, ${booking_departure}, ${booking_return}, ${booking_from}, ${booking_to}, ${booking_price})
    `
}

const updateOneBooking = ({carrier_id, user_id, ticket_type_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}) => {
    
    return sql `
        UPDATE flight_bookings
        SET carrier_id = ${carrier_id}, user_id = ${user_id}, ticket_type_id = ${ticket_type_id}, booking_departure = ${booking_departure}, booking_return = ${booking_return}, booking_from = ${booking_from}, booking_to = ${booking_to}, booking_price = ${booking_price}
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