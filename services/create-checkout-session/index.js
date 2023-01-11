const stripe = require("stripe")('sk_test_51M3lFCBdhXwO3KVwPMxn2fToUo3gVjaZ6FLNN2GolTawaIzTpYlBClFErORZwRodRIWb9zg6JmbJ3lWzWilrNnOt000kfAlayr');

module.exports = () => async (req, res, next) =>{
    const {price} = req.body;
    console.log(price)
      // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: '854'+'00',
        currency: "eur",
        automatic_payment_methods: {
        enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });

}