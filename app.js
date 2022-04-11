const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const { PORT } = require("./Config");
require("./Helpers/InitDatabase");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  try {
    res.status(200).send({
      status: 1,
      message: "Server is up and running",
    });
  } catch (error) {
    next(error);
  }
});

app.get("/health", async (req, res, next) => {
  try {
    res.status(200).send({
      status: 1,
      message: "Server health is OK",
      uptime: process.uptime(),
      date: new Date(),
    });
  } catch (error) {
    next(error);
  }
});

app.use("/api", require("./Routes/Order.Route"));

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log("🚀 Server is up and running on http://localhost:" + PORT);
});
