const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true,
    },
    IsAdmin: {
        type: Boolean,
        require: true,
    },
    profile: {
        type: String,
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

module.exports = mongoose.model('Profile', ProfileSchema)