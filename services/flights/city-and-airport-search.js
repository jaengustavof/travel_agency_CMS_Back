const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENTID,
    clientSecret: process.env.AMADEUS_CLIENTSECRET, 
});

module.exports = (db) => async (req, res, next) => {
    const parameter = req.params.parameter;

    amadeus.referenceData.locations
        .get({
            keyword: parameter,
            subType: Amadeus.location.any,
        })
        .then(function (response) {
            res.send(response.result);
        })
        .catch(function (response) {
            res.send(response);
        });
        

}


