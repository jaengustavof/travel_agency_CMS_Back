
const Amadeus = require('amadeus');
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENTID,
  clientSecret: process.env.AMADEUS_CLIENTSECRET,  
});


module.exports = () => async (req, res, next) => {

  const {origin, destination, departureDate, returnDate, pax} =  req.body

  amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        returnDate: returnDate,
        adults: pax,
        max: "25"
    }).then(function(response){
      console.log(response.data);
      res.send(response.data);
    }).catch(function(responseError){
      console.log(responseError.code);
    });

  };