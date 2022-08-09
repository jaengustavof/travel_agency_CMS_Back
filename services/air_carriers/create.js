const { createCarrier, getOneCarrier} = require("../../queries/air_carriers");
const errors = require("../../errors/carriers")

module.exports = (db) => async (req, res, next) => {

    const {carrier_name, carrier_logo, carrier_iata} = req.body
    
    const carrier = await getOneCarrier(db)({carrier_iata});

    if(carrier.data) return next(errors[401]);
   
    const queryResult = await createCarrier(db)({
        carrier_name, 
        carrier_logo, 
        carrier_iata
      })

    if (!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: 'Carrier created'
    })

}