const express = require('express')
const app = express()
const { appendFile } = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()

const productController = require('../controllers/productcontroller')

app.use(bodyParser.urlencoded({extended:false}))

router.get('/admin/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','add-product.html'))
})

router.post('/admin/add-product',productController.addProducts)
router.get('/admin/add-products/list',productController.viewProducts)
exports.routes = router

