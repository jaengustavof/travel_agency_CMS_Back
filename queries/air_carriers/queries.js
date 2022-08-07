const { sql } = require("slonik");

const selectAllCarriers = () => {
    return sql `
        SELECT * FROM air_carriers
    `
};

const selectOneCarrier = ({carrier_iata}) => {
    return sql `
        SELECT * FROM air_carrier
        WHERE carrier_iata = (${carrier_iata})
    `
}

module.exports = {
    selectAllCarriers,
    selectOneCarrier,
}