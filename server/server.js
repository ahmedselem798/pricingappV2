const express = require("express");
const cors = require("cors");
const app = express();

const CountriesModule = require("./model/CountrisSchema");
const CountriesConnection = require("./routes/CountrisRoutes");

app.use(cors());
app.use(express.json());

CountriesConnection(app);

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  CountriesModule.findByIdAndUpdate(
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

app.get("/getCountry/:id", (req, res) => {
  const id = req.params.id;
  CountriesModule.findById({ _id: id })
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server Running on port 5000.......");
});
