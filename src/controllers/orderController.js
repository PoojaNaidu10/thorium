const OrderModel= require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel = require("../models/userModel")

const createOrder= async function (req,res){
    let userId= req.body.userId
    let productId= req.body.productId
    let data= req.body
    let header= req.headers

    const user= await UserModel.find({_id:userId}).select({_id:1})
    const product= await ProductModel.find({_id:productId}).select({_id:1})
    

    if(user.length>0 && product.length>0){
        if (header["isfreeappuser"]==="true"){
            data.amount=0
            data.isFreeAppUser=true
            const result= await OrderModel.create(data)
            res.send({newOrder: result})
        }
        else if (header["isfreeappuser"]==="false") {                                                
            const price= await ProductModel.find({_id:productId}).select({price:1, _id:0})
            const newprice= price[0].price
            const bal= await UserModel.find({_id:userId}).select({balance:1, _id:0})
            const newbalance= bal[0].balance
            
            if(newbalance>=newprice){                                                                         
                const newBal= UserModel.find({_id:userId},{$set:{balance:(newbalance-newprice)}},{$new:true})
                data.amount= newprice
                data.isFreeAppUser= false
                const outcome= await OrderModel.create(data)
                res.send({newOrd: outcome})
            }
            else {
                res.send("The user does not have sufficient balance to place the order")
            }

        }


    }
    else {res.send("The user or The product does  not exist")}



}

module.exports.createOrder= createOrder





