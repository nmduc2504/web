const express = require('express')
const router = express.Router()

const cart = require('../model/cart')

router.post('/', async(req,res) => {
    const{user_id,status,name,address,phone,email} = req.body

    if(!user_id)
        return res.status(400).json({success:false,message: 'User ID is required'})

    if(!status)
        return res.status(400).json({success:false,message: 'Status is required'})
        

    if(!name)
        return res.status(400).json({success: false,message: 'Name is required'})
    
    if(!address)
        return res.status(400).json({success: false,message: 'Address is required'})

    if(!phone)
        return res.status(400).json({success: false,message: 'Phone is required'})
        
    if(!email)
        return res.status(400).json({success: false,message: 'Email is required'})

    try {
            const newCart = new cart({user_id,status,name,address,phone,email})
            await newCart.save()
            res.json({success: true, message:'Thanh cong', post: newCart})
    } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router