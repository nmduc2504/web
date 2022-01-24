const express = require('express')
const router = express.Router()

const Category = require('../model/category')

router.post('/', async(req,res) => {
    const{title, description, status} = req.body
    
    
    if(!title)
        return res.status(400).json({success:false,message: 'Title is required'})

    try {
        const newCategory = new Category({title,description,status})
        await newCategory.save()
        res.json({success: true, message:'Thanh cong', post: newCategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router
