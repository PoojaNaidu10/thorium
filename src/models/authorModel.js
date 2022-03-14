const mongoose = require('mongoose');
const validator = require("validator")

// var validateEmail = function (email) {
//     var re = /^\w+([\.-]?\w+)*@\w+ ( [\.-]?\W+)*(\.\w{2,3})+$/;
//     return re.test(email)
    
// };

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

    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     validator(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("Invalid Email !")
    //         }
    //     }
    //     // trim: true,
    //     // lowercase: true,
    //     // //validator: [validateEmail, 'Please fill valid email address'],
    //     // match: [/^\w+([\.-]?\w+)*@\w+ ( [\.-]?\W+)*(\.\w{2,3})+$/,'Please fill a valid email address']
    //     // // validator: {
    //     // //     validator: validator.email,
    //     // //     message: '{VALUE} is not a valid email',
    //     // //     isAsync: false,
    //     // //     match: [/^\w+([\.-]?\w+)*@\w+ ( [\.-]?\W+)*(\.\w{2,3})+$/]
    //     // // }
    // },

    password:{
        type:String,
        require:true
    }
    
    // author_name: String,
    // age:Number,
    // address:String,
    // ratings:Number

}, { timestamps: true });

module.exports = mongoose.model('Authorsproject', authorSchema)

