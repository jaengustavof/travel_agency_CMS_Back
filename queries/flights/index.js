/*const Amadeus = require('amadeus');
console.info('Amadeus client ID ', process.env.AMADEUS_CLIENTID)
console.info('Amadeus client SECRET ',process.env.AMADEUS_CLIENTSECRET)
const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENTID,
    clientSecret: process.env.AMADEUS_CLIENTSECRET, 
  });

const searchOneFlight = () => async ({origin, destination, departureDate, returnDate, pax}) => {
    console.log(origin, destination, departureDate, returnDate, pax )

    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        returnDate: returnDate,
        adults: pax
    }).then(function(response){
      console.log(response.data[0]);
      return response.data[0]
    }).catch(function(responseError){
      console.log(responseError.code);
    });
}

module.exports = {
    searchOneFlight
}*/