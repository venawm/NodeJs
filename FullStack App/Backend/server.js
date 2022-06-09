const express = require('express')
const fs = require('fs')
const http  = require('http')
const app = express()
const PORT = 3001
const path = require('path')
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use(express.json())
const productRoutes = require('./Routes/products.route')
app.use(productRoutes)




app.listen(PORT)