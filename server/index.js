const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://ahmed:<password>@cluster0.yf5tknm.mongodb.net/RegisterTest"
  )
  .then(() => {
    console.log("Database Connected.....");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log("Server Running on port 3000...");
});
