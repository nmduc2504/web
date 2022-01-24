const mongoose=require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    status: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    total: {
        type: Number,
        require: true
    },
    name: {
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
    email: {
        type:String,
        required:true
    },
    discound: {
        type:String,
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

module.exports = mongoose.model('Orders', OrderSchema)