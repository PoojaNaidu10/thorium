const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    name:String,
    balance : Number,
    address: String,
    age: Number,
    gender: {
            type: String,
            enum: ["male", "female", "other"]
    },
    isFreeAppUser:{
      type:Boolean,
      default:false
    }

    // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,

    //     required: true
    // },
    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,
}, { timestamps: true });

module.exports = mongoose.model('UserMW', userSchema) //users



// String, Number
// Boolean, Object/json, array