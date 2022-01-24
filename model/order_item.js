const mongoose=require('mongoose')
const { SchemaTypes } = require('mongoose');
const Schema = mongoose.Schema

const Order_ItemSchema = new Schema({
    product_id:{
        type: Schema.Types.ObjectId,
        ref: "Products"
    },
    order_id:{
        type: Schema.Types.ObjectId,
        ref:"Orders"
    },
    price: { 
        type: Number,
        require: true,
    },
    discound: { 
        type: Number,
    },
    quantity: { 
        type: Number,
        require: true,
    },
    created_at:{
        type: Date,
        default: new Date(),
    },
    updated_at:{
        type: Date,
        default: new Date(),
    },
})

module.exports = mongoose.model('Order_Item', Order_ItemSchema)