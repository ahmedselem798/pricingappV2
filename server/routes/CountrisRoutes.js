const mongoose = require("mongoose");

const CountriesModule = require("../model/CountrisSchema");

async function CountriesConnection(app) {
  mongoose
    .connect("mongodb://127.0.0.1:27017/PricingApp")
    .then(() => {
      console.log("Countries Database Connected.....");
    })
    .catch(() => {
      console.log("Faild to Connect Countries Database.....");
    });

  app.post("/create", (req, res) => {
    CountriesModule.create(req.body)
      .then((country) => res.json(country))
      .catch((err) => res.json(err));
  });

  app.get("/", (req, res) => {
    CountriesModule.find({})
      .then((country) => res.json(country))
      .catch((err) => res.json(err));
  });

  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    CountriesModule.findByIdAndDelete(
      { _id: id },
      {
        countryName: req.body.countryName,
        network: req.body.network,
        vpmn: req.body.vpmn,
        imsi: req.body.imsi,
        dataCostPerMB: req.body.dataCostPerMB,
        provider: req.body.provider,
        _2G: req.body._2G,
        _3G: req.body._3G,
        _4G: req.body._4G,
        _5G: req.body._5G,
        lte: req.body.lte,
        lte_m: req.body.lte_m,
        nb_iot: req.body.nb_iot,
        note: req.body.note,
      }
    )
      .then((country) => res.json(country))
      .catch((err) => res.json(err));
  });
}

module.exports = CountriesConnection;
