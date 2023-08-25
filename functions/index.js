const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { request, response } = require("express");

const stripe = require("stripe")(
  "sk_test_51NPSxcC75I7O2ep1O2txuQCanYYBZgJzVw32kOuQEX0YSgnSfNpalkPJ0AQYBFjCuD3GiaV3ZTGcRHlbM5xVtMy400uEI7c4nX"
);

const app = express();
app.use(cors());
app.use(express.json());

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("payment request recived for this amount", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });
//   response.status(201).send({ clientSecret: paymentIntent.client_secret });
// });

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Recieved for this amount >>> ", total);
//   if (total > 0) {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total, //subunits of the currency
//       currency: "usd",
//     });

//     //OK - Created
//     response.status(201).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } else {
//     response.status(201).send({
//       message: "no total price provided",
//     });
//   }
// });
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>>", total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.floor(total),
      currency: "usd",
    });
    // ok - created
    response.status(201).send({ clientSecret: paymentIntent.client_secret });
  } else {
    response.status(201).send({ message: "No data sent" });
  }
});

exports.api = functions.https.onRequest(app);
