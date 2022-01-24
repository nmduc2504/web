const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
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

module.exports = mongoose.model('Users', UserSchema)
