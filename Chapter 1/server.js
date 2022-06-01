const express = require(`express`)
const http = require('http')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/shop')
const app = express()
const PORT  = 3000

app.use(adminRoutes)
app.use(userRoutes)

const server = http.createServer(app)
server.listen(PORT)
