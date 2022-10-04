const mongoose = require('mongoose')
const StudentModel = mongoose.Schema({

    Name: {
        type: String,
        require: true
    },
    RollNo: {
        type: Number,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    MobileNo: {
        type: Number,
        require: true
    },
    Standard: {
        type: Number,
        require: true
    },
    Subject: {
        type: String,
        require: true
    }

}, { timestamps: true });
module.exports = mongoose.model("Student", StudentModel)