const products = []

function addProducts(req,res,next){
    console.log(req.body)
    products.push({title:req.body.title})
    res.redirect('/')
    
}
function viewProducts(req,res,next){
    res.send(products)
}
module.exports = {addProducts,viewProducts}
exports.products = products