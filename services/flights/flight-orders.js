const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId: 'hLTNNmBLAAry5gQ2xLKAZxEBJ9QN2Ux5',
    clientSecret: 'kMk70AxbxzFUbcVb',  
});

module.exports =() => async(req, res, next) =>{

    const selectedFlight = req.body.selectedFlight;
    const flightPasssengers = req.body.flightPasssengers;


   /*
    amadeus.booking.flightOrders.post(
        JSON.stringify({
          'type': 'flight-order',
          'flightOffers': [selectedFlight],
          'travelers': [flightPasssengers]
        })
      ).then(function (response) {
   
        res.send(response.result);
        }).catch(function (response) {
            res.send(response)
        })*/
    
}