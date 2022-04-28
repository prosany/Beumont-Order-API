const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stripeSchema = new Schema(
  {
    client_secret: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const StripeOrder = mongoose.model("stripe_order", stripeSchema);

module.exports = StripeOrder;
