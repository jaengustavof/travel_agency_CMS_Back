const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENTID,
    clientSecret: process.env.AMADEUS_CLIENTSECRET,  
});


module.exports = () => async (req,res,next) => {
  // Book a flight from MAD to ATH on 2022-08-01
  const selectedFlight = req.body.data.flightOffers;
  const flightPasssengers = req.body.flightPasssengers;



  
amadeus.booking.flightOrders.post(
    JSON.stringify({
      'data': {
        'type': 'flight-order',
        'flightOffers': [{
          "type": "flight-offer",
          "id": "1",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2023-02-0",
          "numberOfBookableSeats": 9,
          
          "itineraries": [
              {
                  "duration": "PT22H15M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "CDG",
                              "terminal": "2B",
                              "at": "2023-02-19T20:50:00"
                          },
                          "arrival": {
                              "iataCode": "CPH",
                              "terminal": "3",
                              "at": "2023-02-19T22:45:00"
                          },
                          "carrierCode": "D8",
                          "number": "3639",
                          "aircraft": {
                              "code": "73H"
                          },
                          "operating": {
                              "carrierCode": "D8"
                          },
                          "duration": "PT1H55M",
                          "id": "5",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "CPH",
                              "terminal": "2",
                              "at": "2023-02-20T16:15:00"
                          },
                          "arrival": {
                              "iataCode": "BCN",
                              "terminal": "2",
                              "at": "2023-02-20T19:05:00"
                          },
                          "carrierCode": "D8",
                          "number": "3658",
                          "aircraft": {
                              "code": "73H"
                          },
                          "operating": {
                              "carrierCode": "D8"
                          },
                          "duration": "PT2H50M",
                          "id": "6",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              },
              {
                  "duration": "PT9H35M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "BCN",
                              "terminal": "2",
                              "at": "2023-02-26T10:35:00"
                          },
                          "arrival": {
                              "iataCode": "CPH",
                              "terminal": "3",
                              "at": "2023-02-26T13:35:00"
                          },
                          "carrierCode": "D8",
                          "number": "3657",
                          "aircraft": {
                              "code": "7M8"
                          },
                          "operating": {
                              "carrierCode": "D8"
                          },
                          "duration": "PT3H",
                          "id": "12",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "CPH",
                              "terminal": "3",
                              "at": "2023-02-26T18:10:00"
                          },
                          "arrival": {
                              "iataCode": "CDG",
                              "terminal": "2B",
                              "at": "2023-02-26T20:10:00"
                          },
                          "carrierCode": "D8",
                          "number": "3638",
                          "aircraft": {
                              "code": "73H"
                          },
                          "operating": {
                              "carrierCode": "D8"
                          },
                          "duration": "PT2H",
                          "id": "13",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "161.40",
              "base": "86.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "161.40",
              "additionalServices": [
                  {
                      "amount": "100.00",
                      "type": "CHECKED_BAGS"
                  }
              ]
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DY"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "161.40",
                      "base": "86.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "5",
                          "cabin": "ECONOMY",
                          "fareBasis": "QCALF",
                          "brandedFare": "LOWFARE",
                          "class": "Q",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "6",
                          "cabin": "ECONOMY",
                          "fareBasis": "QLCALF",
                          "brandedFare": "LOWFARE",
                          "class": "Q",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "12",
                          "cabin": "ECONOMY",
                          "fareBasis": "QLCALF",
                          "brandedFare": "LOWFARE",
                          "class": "Q",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "13",
                          "cabin": "ECONOMY",
                          "fareBasis": "QCALF",
                          "brandedFare": "LOWFARE",
                          "class": "Q",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      }],
        'travelers': [{
          "id": "1",
          "dateOfBirth": "1982-01-16",
          "name": {
            "firstName": "JORGE",
            "lastName": "GONZALES"
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
  console.log(response);
  }).catch(function (response) {
    console.error(response);
  });

}
