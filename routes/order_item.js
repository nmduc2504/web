const express = require('express')
const router = express.Router()

const Order_item = require('../model/order_item')

router.post('/', async(req,res) => {
    const{product_id,order_id,price,discound,quantity} = req.body
    if(!product_id)
        return res.status(400).json({success:false,message: 'Product ID is required'})

    if(!order_id)
        return res.status(400).json({success:false,message: 'Order ID is required'})
        
    if(!price)
        return res.status(400).json({success:false,message: 'Price is required'})

    if(!quantity)
        return res.status(400).json({success: false,message: 'Quantity is required'})
    
    try {
            const newOrder_item = new Order_item({product_id,order_id,price,discound,quantity})
            await newOrder_item.save()
            res.json({success: true, message:'Thanh cong', post: newOrder_item})
    } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router