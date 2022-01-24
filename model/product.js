const mongoose=require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    import_price: {
        type:Number,
        required:true
    },
    sell_price: {
        type:Number,
        required:true
    },
    discound: {
        type: String,
        required:true
    },
    weight: {
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    created_at:{
        type: Date,
        default: new Date(),
    },
    updated_at:{
        type: Date,
        default: new Date(),
    },
    published_at:{
        type: Date,
    }
})

module.exports = mongoose.model('Product', ProductSchema)