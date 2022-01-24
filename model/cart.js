const mongoose=require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status: {
        type: String,
        required: true,
    },
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Cart', CartSchema)
