const { STRIPE_SECRET_KEY } = require("../Config");
const Stripe = require("stripe")(STRIPE_SECRET_KEY);
const createError = require("http-errors");
const StripeOrder = require("../models/Stripe.Model");

module.exports = {
  CreatePayment: async (req, res, next) => {
    try {
      const payment = await Stripe.paymentIntents.create({
        amount: 1000,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.status(200).json({
        status: 1,
        client_secret: payment.client_secret,
        created: payment.created,
        amount: payment.amount,
      });
    } catch (error) {
      next(createError(500, error));
    }
  },
};
