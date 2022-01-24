const express = require('express')
const router = express.Router()

const User_profile = require('../model/user_profile')

router.post('/', async(req,res) => {
    const{user_id,name,email,address,phone,avatar,IsAdmin,profile} = req.body

    if(!user_id)
        return res.status(400).json({success:false,message: 'User ID is required'})
    
    if(!name)
        return res.status(400).json({success:false,message: 'Name is required'})
        
    if(!email)
        return res.status(400).json({success:false,message: 'Email is required'})

    if(!avatar)
        return res.status(400).json({success: false,message: 'Avatar is required'})
    
    if(!address)
        return res.status(400).json({success: false,message: 'Address is required'})

    if(!phone)
        return res.status(400).json({success: false,message: 'Phone is required'})
        
    if(!IsAdmin)
        return res.status(400).json({success: false,message: 'IsAdmin is required'})

    if(!profile)
        return res.status(400).json({success: false,message: 'Profile is required'})  
    try {
            const newUser_profile = new User_profile({user_id,name,email,address,phone,avatar,IsAdmin,profile})
            await newUser_profile.save()
            res.json({success: true, message:'Thanh cong', post: newUser_profile})
    } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router