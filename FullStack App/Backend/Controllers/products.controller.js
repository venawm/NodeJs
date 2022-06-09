const { json } = require('express')
const fs  = require('fs')
const path = require('path')

const product = [
    {'name':'Samir','id':0},
    {'name':'Samir','id':1},
    {'name':'Samir','id':2},
    {'name':'Samir','id':3},
    {'name':'Samir','id':4}]
function productController(req,res,next){
    res.send(product)

 }

 function singleProductsController(req,res,next){

    id = req.params.id
    if(id>product.length){
        res.send('error')
    }
    else{
     
     res.send(product[id-1])
    }

 }

 function productAdder(req,res,next){
    let {name} = req.body
    console.log(name)
   
    
    fs.writeFile('product.data.json',JSON.stringify({name}),(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('sucess')
        }
    })

 }
 module.exports = {productController,singleProductsController,productAdder}