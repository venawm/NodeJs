const express = require('express')
const Router = express.Router()
const productsController = require('../Controllers/products.controller')
const {singleProductsController}  = require('../Controllers/products.controller')
const {productAdder}  = require('../Controllers/products.controller')


Router.get('/products',productsController.productController)
Router.get('/product/:id',singleProductsController)
Router.post('/addproduct',productAdder)


 module.exports = Router