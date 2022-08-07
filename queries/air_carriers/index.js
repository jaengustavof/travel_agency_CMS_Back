const { selectAllCarriers, selectOneCarrier } = require("./queries");
const { queryCatcher } = require("../utils");

const getAllCarriers = (db) => async () => {
    return await queryCatcher(db.query, "getAllCarriers")(selectAllCarriers());
}

const getOneCarrier = (db) = async ({carrier_iata}) => {
    return await queryCatcher(db.maybeOne, "getOneCarrier")({carrier_iata})
}

module.exports = {
    getAllCarriers,
    getOneCarrier,
}