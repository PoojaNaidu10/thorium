const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const blogsSchema = new mongoose.Schema( {

    title:{
        type:String,
        require:true,
    },
   body:{
       type:String,
       require:true
   },
   authorId:{
       require:true,
       type:Schema.Types.ObjectId,
       ref:"Authorsproject"
   },
    tags:{
        type:[String]
},
    category:{
        type:[String],
        require:true
   },
   subcategory:{
       type:String
   },
   deletedAt:{
       type: Date
   },
   publishedAt:{
       type: Date
   },
   isDeleted: {
       type:Boolean, 
       default: false
   },
   isPublished: {
       type:Boolean, 
       default: false
   }

    
    

}, { timestamps: true });

module.exports = mongoose.model('Blogsproject', blogsSchema)

