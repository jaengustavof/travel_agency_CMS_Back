const { selectAllCarriers, selectOneCarrier, insertOneCarrier, updateOneCarrier, deleteOneCarrier } = require("./queries");
const { queryCatcher } = require("../utils");

const getAllCarriers = (db) => async () => {
    return await queryCatcher(db.query, "getAllCarriers")(selectAllCarriers());
}


const getOneCarrier = (db) => async({carrier_iata}) =>{

    return await queryCatcher(
        db.maybeOne,
        "getOneCarrier"
    )(selectOneCarrier({carrier_iata}))
};

const createCarrier = (db) => async({carrier_name, carrier_logo, carrier_iata}) =>{
    
    return await queryCatcher(db.query, "createCarrier")(insertOneCarrier({ 
        carrier_name, 
        carrier_logo, 
        carrier_iata
    }
    ));
};

const updateCarrier = (db) => async({carrier_name, carrier_logo, carrier_iata}) => {
    return await queryCatcher(db.query, "UpdateCarrier")(updateOneCarrier({
        carrier_name, 
        carrier_logo, 
        carrier_iata
    }))
}

const removeCarrier = (db) => async({carrier_iata}) =>{
    return await queryCatcher(db.query, "removeCarrier")(deleteOneCarrier({
            carrier_iata
        })
    )
}

module.exports = {
    getAllCarriers,
    getOneCarrier,
    createCarrier,
    updateCarrier,
    removeCarrier,
}