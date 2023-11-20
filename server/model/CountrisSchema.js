const mongoose = require("mongoose");


const CountriesSchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  vpmn: {
    type: String,
    required: true,
  },
  imsi: {
    type: Number,
    required: true,
  },
  dataCostPerMB: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  _2G: {
    type: String,
    required: true,
  },
  _3G: {
    type: String,
    required: true,
  },
  _4G: {
    type: String,
    required: true,
  },
  _5G: {
    type: String,
    required: true,
  },
  lte: {
    type: String,
    required: true,
  },
  lte_m: {
    type: String,
    required: true,
  },
  nb_iot: {
    type: String,
    required: true,
  },
  note: {
    type: String
    
  },
});


 mongoose.model('CountriesData',CountriesSchema)
