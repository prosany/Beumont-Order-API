const createError = require("http-errors");
const CreateOrderID = require("../Helpers/OrderID");
const Order = require("../Models/Order.Model");

module.exports = {
  Orders: async (req, res, next) => {
    try {
      const orders = await Order.find({});
      res.status(200).send({ status: 1, results: orders });
    } catch (error) {
      error.status = 404;
      next(error);
    }
  },
  CreateOrder: async (req, res, next) => {
    try {
      const order = new Order({
        ...req.body,
        orderNumber: "BM-" + CreateOrderID(6),
      });
      const savedOrder = await order.save();
      if (!savedOrder) throw createError.BadRequest("Order Placed Failed");
      res.send({ status: 1, message: "Order Placed Successful" });
    } catch (error) {
      next(error);
    }
  },
  UpdateOrder: async (req, res, next) => {
    try {
      const { id, status } = req.query;
      const order = await Order.findByIdAndUpdate(
        { orderNumber: id },
        {
          orderStatus: status,
        },
        {
          new: true,
        }
      );
      if (!order) throw createError.BadRequest("Order Status Update Failed");
      res.send({ status: 1, message: "Order Status Update Successful" });
    } catch (error) {
      next(error);
    }
  },
};
