const { count } = require("console")
const authorsModel= require("../models/authorsModel")
const bookModel = require("../models/bookModel")



const createAuthors= async function (req, res) {
    let data= req.body

    let savedData= await authorsModel.create(data)
    res.send({msg: savedData})
}

const allBooks = async function(req, res){
    const authorsDetails = await authorsModel.find({author_name: "Chetan Bhagat"}).select({author_id:1,_id:0})
    const id = authorsDetails[0].author_id
    const bookName = await bookModel.find({author_id: id}).select({name:1,_id:0})
    res.send({msg:bookName})
}

const updatedBookPrice = async function(req, res){
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN =await authorsModel.find({author_id:id}).select({author_name:1,_id:0})

    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:200},{new:true}).select({price:1,_id:0})
    res.send({msg:authorN, updatedPrice})
    
}


const authorsName = async function(req, res){
    const bookId = await bookModel.find({price: {$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id = bookId.map(abc => abc.author_id)

    let arr =[]
    for(let i=0; i<id.length; i++){
       let a = id[i]
       const author = await authorsModel.find({author_id:a}).select({author_name:1,_id:0})
       arr.push(author)

    }
    const authorsName = arr.flat()

    res.send({msg:authorsName})

}




module.exports.createAuthors=createAuthors
module.exports.allBooks=allBooks
module.exports.updatedBookPrice=updatedBookPrice
module.exports.authorsName=authorsName