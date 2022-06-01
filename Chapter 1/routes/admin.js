const express = require('express')
const app = express()
const { appendFile } = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()
const products =[]

app.use(bodyParser.urlencoded({extended:false}))

router.get('/admin/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','add-product.html'))
})

router.post('/admin/add-product',(req,res,next)=>{
    
    products.push({title:req.body.title})
    res.redirect('/')
    
})
router.get('/admin/add-products/list',(req,res,next)=>{
    res.send(products)
})
exports.routes = router
exports.products = products
