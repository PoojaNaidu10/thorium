const mongoose = require("mongoose")
Schema = mongoose.Schema
const BookModel = mongoose.Schema({
  title:{
      type:String,
      require:true,
      unique:true
  },
  excerpt:{
      type:String,
      require:true
  },
  userId:{
      type:Schema.Types.ObjectId,
      ref:"User",
      require:true,
   },
   ISBN:{
    type:String,
    require:true,
    unique:true
   },
    category:{
    type:String,
    require:true
  },
  subcategory:{
    type:[String],
    require:true
  },
  reviews:{
      type:Number,
      require:true,
      default:0
  },
  deletedAt:{
      type:Date
  },
  isDeleted:{
      type:Boolean,
      default:false
  },
  releasedAt:{
      type:Date,
      require:true,
      
  },
  bookCover:{
      type:String,
      require:true
  }
  
}, {timestamps: true})
module.exports=mongoose.model("Book",BookModel)
