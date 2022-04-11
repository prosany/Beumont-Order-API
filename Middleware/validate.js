const createError = require("http-errors");
const { CREATE_SECRET } = require("../Config");

module.exports = {
  validate: (req, res, next) => {
    try {
      const { key } = req.headers;
      if (key !== CREATE_SECRET) throw createError.Unauthorized("Invalid key");
      next();
    } catch (error) {
      error.status = 401;
      next(error);
    }
  },
};
