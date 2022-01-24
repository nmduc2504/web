const express = require('express')
const router = express.Router()

const Product = require('../model/product')

router.post('/', async(req,res) => {
    const{title,import_price,sell_price,discound,image,weight,description,published_at} = req.body
    
    if(!title)
        return res.status(400).json({success:false,message: 'Title is required'})

    if(!import_price)
        return res.status(400).json({success:false,message: 'Import price is required'})
        
    if(!sell_price)
        return res.status(400).json({success:false,message: 'Sell price is required'})

    if(!discound)
        return res.status(400).json({success: false,message: 'Discound is required'})
    
    if(!image)
        return res.status(400).json({success: false,message: 'Image is required'})
    
    if(!weight)
        return res.status(400).json({success: false,message: 'Weight is required'})

    if(!description)
        return res.status(400).json({success: false,message: 'Description is required'})
        
    try {
            const newProduct = new Product({title,import_price,sell_price,discound,image,weight,description,published_at})
            await newProduct.save()
            res.json({success: true, message:'Thanh cong', post: newProduct})
    } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: 'Loi he thong'})
    }
})
module.exports = router

