const createError = require("http-errors");

module.exports = {
  Orders: async (req, res, next) => {
    try {
      res.send({ status: 1, orders: [] });
    } catch (error) {
      error.status = 404;
      next(error);
    }
  },
  CreateOrder: async (req, res, next) => {
    try {
      res.send({ status: 1, orders: [] });
    } catch (error) {
      next(error);
    }
  },
};
