const Amadeus = require('amadeus');

const amadeus = new Amadeus({
    clientId: 'RIwRKcDtMiRpwUmNjNZXrnDhMEq2Fmee',
    clientSecret: 'tH2HUr6vGOBfhtSA',
    
  });
  

module.exports = (db) => async (req, res, next) => {

    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'BCN',
        destinationLocationCode: 'MAD',
        departureDate: '2023-04-01',
        returnDate: '2023-04-08',
        adults: '2'
    }).then(function(response){
      console.log(response.data[0]);
    }).catch(function(responseError){
      console.log(responseError.code);
    });

    res.status(200).json({
      success: true,
      message: "Test auth"
    });
  };