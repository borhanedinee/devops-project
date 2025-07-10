const express = require("express");
const sequelize = require("./config/db");
const { baseRouter } = require("./routes/baseRouter");
require("./models/associations");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(baseRouter);

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Unable to create database & tables:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
