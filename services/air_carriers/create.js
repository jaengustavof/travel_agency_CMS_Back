

module.exports = (db) => async (req, res, next) => {


    res.status(200).json({
        success: true,
        message: 'test Create Air Carr'
    })

}