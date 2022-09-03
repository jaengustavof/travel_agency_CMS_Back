const { selectAllBookings, selectOneBooking, createOneBooking, updateOneBooking, removeOneBooking } = require("./queries");
const { queryCatcher } = require("../utils");

const getAllBookings = (db) => async () =>{
    return await queryCatcher(db.query, "getOneBooking")(selectAllBookings());
}

const getOneBooking = (db) => async ({booking_id}) => {
    return await queryCatcher(db.maybeOne, "getOneBooking")(selectOneBooking({booking_id}));
}

const createBooking = (db) => async({user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}) => {

    return await queryCatcher(db.query, "createBooking")(createOneBooking({user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}));

}

const updateBooking = (db) => async({user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}) => {

    return await queryCatcher(db.query, "updateBooking")(updateOneBooking({user_id, booking_id, booking_departure, booking_return, booking_from, booking_to, booking_price}));

}

const removeBooking = (db) => async({booking_id}) => {
    return await queryCatcher(db.query, "removeBooking")(removeOneBooking({booking_id}))
}

module.exports = {
    getAllBookings,
    getOneBooking,
    createBooking,
    updateBooking,
    removeBooking
}