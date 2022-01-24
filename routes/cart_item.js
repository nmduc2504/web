const express = require('express')
const router = express.Router()

const Cart_item = require('../model/cart_item')

router.post('/', async(req,res) => {
    const{product_id,cart_id,price,quantity,discound,active} = req.body
    if(!product_id)
        return res.status(400).json({success:false,message: 'Product ID is required'})

    if(!cart_id)
        return res.status(400).json({success:false,message: 'Cart ID is required'})
        
    if(!price)
        return res.status(400).json({success:false,message: 'Price is required'})

    if(!quantity)
        return res.status(400).json({success: false,message: 'Quantity is required'})
    
    if(!active)
        return res.status(400).json({success: false,message: 'Active is required'})
    try {
            const newCart_item = new Cart_item({product_id,cart_id,price,quantity,discound,active})
            await newCart_item.save()
            res.json({success: true, message:'Thanh cong', post: newCart_item})
    } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router