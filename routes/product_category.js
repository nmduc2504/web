const express = require('express')
const router = express.Router()

const Product_category = require('../model/product_category')

router.post('/', async(req,res) => {
    const{category_id,product_id} = req.body
    
    
    if(!category_id)
        return res.status(400).json({success:false,message: 'Category id is required'})

    if(!product_id)
        return res.status(400).json({success:false,message: 'Product id is required'})

    try {
        const newProduct_category = new Product_category({category_id,product_id})
        await newProduct_category.save()
        res.json({success: true, message:'Thanh cong', post: newProduct_category})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router