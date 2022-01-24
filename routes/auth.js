const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User =require("../model/User")

const { json } = require('express')

// @route POST api/auth/register
// @desc Register User
// @access Public
router.post('/register', async(req,res) => {
    const {username, password} = req.body

    //simple validation
    if(!username || !password)
        return res.status(400).json({success: false, message: 'Chua co username/password'})
    try {
        //kiem tra user da ton tai
        const user = await User.findOne({username})
        if(user)
            return res.status(400).json({success: false, message: 'Username da ton tai'})
        
        //All good
        const hashedPassword = await argon2.hash(password)
        const newUser= new User({username, password: hashedPassword})
        await newUser.save()
        
        //Tra ve Token
        const acessToken = jwt.sign({userID: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'Username duoc tao thanh cong', acessToken})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
// @route POST api/auth/login
// @desc Login User
// @access Public
router.post('/login', async (req,res) => {
    const {username,password} = req.body
    //Simple Validation
    if(!username||!password)
        return res.status(400).json({success: false, message: 'Khong co username/password'})
        try {
            //Kiem tra user da ton tai chua
            const user = await User.findOne({username})
            if(!user)
            return res.status(400).json({success: false, message: "Sai username va/hoac password"})
    
            //Username hop le
            const passwordValid = await argon2.verify(user.password, password)
            if(!passwordValid)
            return res.status(400)/json({success: false, message: 'Sai username va/hoac password'})
    
            //All good
             //Tra ve Token
             const acessToken = jwt.sign({userID: user._id}, process.env.ACCESS_TOKEN_SECRET)
             res.json({success: true, message: 'Username dang nhap thanh cong', acessToken})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
        }
})
module.exports=router