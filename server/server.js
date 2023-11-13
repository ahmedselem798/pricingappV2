const express = require('express')
const cors = require('cors')
const app = express()

const CountriesConnection = require('./routes/CountrisRoutes')

app.use(cors())
app.use(express.json())


CountriesConnection(app)





app.listen(5000,()=>{
  console.log("Server Running on port 5000......")
})