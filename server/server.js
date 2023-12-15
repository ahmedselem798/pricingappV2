const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")

const Countries = require("./routes/CountrisRoutes");
const Users = require("./routes/UsersRoutes");
require("./model/UsersSchema");

// const nodemailer = require('nodemailer');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "1234";

// const UsersModule = mongoose.model("UsersData");

const app = express();
dotenv.config()

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))

mongoose
  .connect(process.env.DATABASE_CONNECTION_URL)
  .then(() => {
    console.log("Database Connected......");
  })
  .catch((error) => {
    console.log("Faild to Connect Database....." + error);
  });

Countries(app);
Users(app);

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server Running on port ${process.env.PORT_NUMBER} .......`);
});
