const express = require("express");
const router = express.Router();
const { CreatePayment } = require("../Controllers/Stripe.Controller");

router.post("/create-payment", CreatePayment);

module.exports = router;
