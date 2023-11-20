const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "1234";
// require("./model/UsersSchema");

// const UsersModule = mongoose.model("UsersData");

const app = express();

const Countries = require("./routes/CountrisRoutes");
const Users = require("./routes/UsersRoutes");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/PricingApp")
  .then(() => {
    console.log("Database Connected.....");
  })
  .catch(() => {
    console.log("Faild to Connect Database.....");
  });

Countries(app);
Users(app);


app.listen(5000, () => {
  console.log("Server Running on port 5000.......");
});
