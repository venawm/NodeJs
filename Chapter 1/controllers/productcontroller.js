const Product = require('../model/product')


function addProducts(req,res,next){
    console.log(req.body)
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/')
    
}
function viewProducts(req,res,next){
    const products = Product.fetchAll()
    res.send(products)
}
module.exports = {addProducts,viewProducts}
 