const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    orderDetails: {
      type: Object,
      required: true,
    },
    paymentID: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    paymentLink: {
      type: Object,
      required: true,
    },
    payer: {
      type: Object,
      required: true,
    },
    purchase_units: {
      type: Array,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["Paypal", "Credit Card", "COD"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
