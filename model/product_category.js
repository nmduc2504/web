const mongoose=require('mongoose')
const Schema = mongoose.Schema

const Product_categorySchema = new Schema({
    category_id :{
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    product_id :{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }
})

module.exports = mongoose.model('Product_category', Product_categorySchema)