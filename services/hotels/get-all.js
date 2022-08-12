const { getAllHotels } = require("../../queries/hotels")


module.exports = (db) => async (req, res, next) => {

    const queryResult = await getAllHotels(db)()

    res.status(200).json({
      success: true,
      message: queryResult.data
    });
};