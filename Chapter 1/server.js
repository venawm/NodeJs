const express = require(`express`)
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');

const adminData = require('./routes/admin')
const userRoutes = require('./routes/shop')
const app = express()
const PORT  = 3000
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))
app.use(adminData.routes)
app.use(userRoutes)

const server = http.createServer(app)
server.listen(PORT)
