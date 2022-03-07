const ProductModel= require("../models/productmodel")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await ProductModel.create(data)

    res.send({msg: savedData})
}


module.exports.createProduct= createProduct
