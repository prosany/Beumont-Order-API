require("dotenv").config();

let config = {};

config.PORT = process.env.PORT || 9191;
config.APP_ENV = process.env.APP_ENV || "development";
config.DB_URL = process.env.DB_URL;
config.DB_NAME = process.env.DB_NAME;
config.DB_PASSWORD = process.env.DB_PASSWORD;
config.DB_USER = process.env.DB_USER;
config.CREATE_SECRET = process.env.CREATE_SECRET;
config.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

module.exports = config;
