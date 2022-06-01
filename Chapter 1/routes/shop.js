const express = require('express')
const path = require('path')
const router = express.Router()
const adminData = require('../controllers/productcontroller')

router.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','shop.html'))
    console.log(adminData.products)
   
})


module.exports = router;