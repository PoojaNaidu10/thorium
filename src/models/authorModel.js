const mongoose = require('mongoose');
const validator = require("validator")



const authorSchema = new mongoose.Schema( {

    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    title:{
         type:String,
         require:true,
         enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email",
            isAsync: false,
        },
    },

    
    password:{
        type:String,
        require:true,
        unique:true,
        trim:true
    }
    
   

}, { timestamps: true });

module.exports = mongoose.model('Authorsproject', authorSchema)

