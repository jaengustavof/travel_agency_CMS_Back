const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENTID,
    clientSecret: process.env.AMADEUS_CLIENTSECRET,  
});

module.exports =() => async(req, res, next) =>{

    const flight = req.body
    console.log(flight)
    res.status(200).json({
        success: true,
        data: flight
    })
    // Confirm availability and price
    /*
    amadeus.shopping.flightOffers.pricing.post(
        JSON.stringify({
            'data': {
                'type': 'flight-offers-pricing',
                'flightOffers': [flight],
            }
        })
    ).then(function (response) {
            res.send(response.result);
        }).catch(function (response) {
            res.send(response)
        })

    */
}