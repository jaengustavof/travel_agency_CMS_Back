const { removeCarrier, getOneCarrier } = require("../../queries/air_carriers");
const errors = require("../../errors/carriers");
const { queryCatcher } = require("../../queries/utils")

module.exports = (db) => async (req, res, next) => {
    
    const { carrier_iata } = req.body;

    const carrier = await getOneCarrier(db)({ carrier_iata })
    
    if(!carrier.data) return next(errors[404]);

    const queryCatcher = await removeCarrier(db)({ carrier_iata });

    if(!queryCatcher.ok) return next(errors[500])


    res.status(200).json({
        success: true,
        message: "Carrier removed"
    })
}