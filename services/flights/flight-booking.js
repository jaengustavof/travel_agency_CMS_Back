const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENTID,
    clientSecret: process.env.AMADEUS_CLIENTSECRET,  
});

module.exports = () => async (req,res,next) => {

    const { flight, travelers} = req.body
    console.log(travelers)

/*  amadeus.booking.flightOrders.post(
    JSON.stringify({
        'data': {
            'type': 'flight-order',
            'flightOffers': [flight],
            'travelers': [{
                "id": "1",
                "dateOfBirth": "1982-01-16",
                "name": {
                "firstName": "Pepe",
                "lastName": "Diaz"
                },
                "gender": "MALE",
                "contact": {
                "emailAddress": "jorge.gonzales833@telefonica.es",
                "phones": [{
                    "deviceType": "MOBILE",
                    "countryCallingCode": "34",
                    "number": "480080076"
                }]
                },
                "documents": [{
                "documentType": "PASSPORT",
                "birthPlace": "Madrid",
                "issuanceLocation": "Madrid",
                "issuanceDate": "2015-04-14",
                "number": "00000000",
                "expiryDate": "2025-04-14",
                "issuanceCountry": "ES",
                "validityCountry": "ES",
                "nationality": "ES",
                "holder": true
                }]
            }]
        }
    })
    ).then(function (response) {
      res.send(response.result);
    }).catch(function (response) {
      res.send(response);
    });

*/
}