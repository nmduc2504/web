const mongoose=require('mongoose')
const { SchemaTypes } = require('mongoose');
const Schema = mongoose.Schema

const Cart_ItemSchema = new Schema({
    product_id: {
        type: SchemaTypes.ObjectId,
        ref: "Product"
    },
    cart_id:{
        type: SchemaTypes.ObjectId,
        ref:"Cart"
    },
    price:{ 
        type: Number,
        require: true,
    },
    discound:{
        type: String,
    },
    quantity: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    },
    created_at:{
        type: Date,
        default: new Date()
    },
    updated_at:{
        type: Date,
        default: new Date(),
    },
})

module.exports = mongoose.model('Cart_Item', Cart_ItemSchema)