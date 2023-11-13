const mongoose = require("mongoose");
async function CountriesConnection(app) {
  mongoose
    .connect("mongodb://127.0.0.1:27017/PricingApp")
    .then(() => {
      console.log("Countries Database Connected.....");
    })
    .catch(() => {
      console.log("Faild to Connect Countries Database.....");
    });
}

module.exports = CountriesConnection;
