const { getAllCarriers } = require("../../queries/air_carriers");
const errors = require("../../errors/commons")

module.exports = (db) => async (req, res, next) => {

    const queryResult = await getAllCarriers(db)();

    if(!queryResult.ok) return next(errors[400]);

    res.status(200).json({
      success: true,
      message: queryResult.data
    });
};