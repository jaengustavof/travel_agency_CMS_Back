const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId: 'hLTNNmBLAAry5gQ2xLKAZxEBJ9QN2Ux5',
    clientSecret: 'kMk70AxbxzFUbcVb',  
});

module.exports =() => async(req, res, next) =>{

    const flight = req.body
    
    // Confirm availability and price
    amadeus.shopping.flightOffers.pricing.post(
        JSON.stringify({
            "data": {
                "type": "flight-offers-pricing",
                "flightOffers": [
                    flight
                ]
            }
        })
    ).then(function (response) {
            res.send(response.result);
        }).catch(function (response) {
            res.send(response)
        })
   
}