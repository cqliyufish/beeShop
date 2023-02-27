const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51Ls8qkHWOZEUpJ83tYNoLoWFQ88LNcvARLz1U85d3FuRIZ4RdLkmAz3F4Wt0ckPFXIArcC8QKFoJHiZQ8ZmRRTOx00lsMjsYMs"
);
const YOUR_DOMAIN = "http://localhost:3000";
const Cart = require("../models/Cart");
const Product = require("../models/Product");

router.post("/payment", async (req, res) => {
  const products = req.body.cart.products;
  const line_items = products.map((p) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: p.title,
        },
        unit_amount: p.price * 100,
      },
      quantity: p.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cart`,
  });
  res.send({ url: session.url });
});

module.exports = router;
