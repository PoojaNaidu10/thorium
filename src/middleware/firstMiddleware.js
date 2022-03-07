//const productmodel = require("../models/productmodel");
const userModel = require("../models/userModel");
//const orderModel = require("../models/orderModel")

const firstMiddleware = function (req, res, next){
    let header = req.headers
    if(header["isfreeappuser"]){
        next();
    }
    else {
        res.send("The request is missing a mandatory header")
    }
}

// const secondMiddleware = async function (req, res, next){
//   //console.log("This is the second middleware")
//   let userId = req.body.userId
//   let productId = req.body.productId
//   let user = await userModel.findOne({_id:userId})
//   let Product = await productmodel.findOne({_id:productId})

//   if(!user){
//       return res.send("The user is not present")
//   }

//   if(!Product){
//       return res.send("The product is not present")
//   }
//   next();
// }

// const thirdMiddleware = async function(req, res, next){
//     //return res.send("The product")
//   let orderId = await orderModel.find({isFreeAppUser:false}).select({_id:1})
//   console.log(orderId)
//  // return req.send(orderId);
//     next();
// }
        
        



// let authorId= await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
//    let arr1=[]
//    arr1=authorId.map(e=>e._id)
//   let data1= await bookModel.updateMany(
//     {author:{$in:arr1}},
//      {$inc:{price:+10}},
//      {new:true})
// res.send(data1) 
// }
//module.exports.secondMiddleware=secondMiddleware
module.exports.firstMiddleware=firstMiddleware
//module.exports.thirdMiddleware=thirdMiddleware