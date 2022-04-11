const express = require("express");
const router = express.Router();
const { Orders, CreateOrder } = require("../Controllers/Order.Controller");
const { validate } = require("../Middleware/validate");

router.get("/orders", Orders);
router.post("/create-order", validate, CreateOrder);

module.exports = router;
