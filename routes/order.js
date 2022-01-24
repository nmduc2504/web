const express = require('express')
const router = express.Router()

const Order = require('../model/order')

router.post('/', async(req,res) => {
    const{status,user_id,total,name,address,phone,email,discound} = req.body
    if(!status)
        return res.status(400).json({success:false,message: 'Status is required'})

    if(!user_id)
        return res.status(400).json({success:false,message: 'User ID is required'})
        
    if(!total)
        return res.status(400).json({success:false,message: 'Total is required'})

    if(!name)
        return res.status(400).json({success: false,message: 'Name is required'})
    
    if(!address)
        return res.status(400).json({success: false,message: 'Address is required'})

    if(!phone)
        return res.status(400).json({success: false,message: 'Phone is required'})
        
    if(!email)
        return res.status(400).json({success: false,message: 'Email is required'})

        
    try {
            const newOrder = new Order({status,user_id,total,name,address,phone,email,discound})
            await newOrder.save()
            res.json({success: true, message:'Thanh cong', post: newOrder})
    } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router