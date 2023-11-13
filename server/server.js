const express = require("express");
const cors = require("cors");
const app = express();

const CountriesModule = require("./model/CountrisSchema");
const CountriesConnection = require("./routes/CountrisRoutes");

app.use(cors());
app.use(express.json());

CountriesConnection(app);

app.post("/create", (req, res) => {
  CountriesModule.create(req.body)
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server Running on port 5000.....");
});
