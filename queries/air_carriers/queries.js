const { sql } = require("slonik");

const selectAllCarriers = () => {
    return sql `
        SELECT * FROM air_carriers
    `;
};

const selectOneCarrier = ({carrier_iata}) => {
    return sql `
    SELECT * FROM air_carriers 
    WHERE carrier_iata = ${carrier_iata};
    `
}

const insertOneCarrier = ({carrier_name, carrier_logo, carrier_iata}) => {
    
    return sql `
        INSERT INTO air_carriers (carrier_name, carrier_logo, carrier_iata)
        VALUES (${carrier_name}, ${carrier_logo}, ${carrier_iata})
    `;
}

const updateOneCarrier = ({carrier_name, carrier_logo, carrier_iata}) => {
    
    return sql `
        update air_carriers
        SET carrier_name = ${carrier_name}, carrier_logo = ${carrier_logo}
        WHERE carrier_iata = ${carrier_iata}
    `;
}

const deleteOneCarrier = ({carrier_iata}) =>{
    return sql `
        DELETE FROM air_carriers
        WHERE carrier_iata = ${carrier_iata};
    `;
}

module.exports = {
    selectAllCarriers,
    selectOneCarrier,
    insertOneCarrier,
    updateOneCarrier,
    deleteOneCarrier,
}