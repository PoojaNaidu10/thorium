const jwt = require("jsonwebtoken");
const BlogsModel = require("../models/blogs")

let authenticate = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        if (!token) {
            return res.status(404).send({ msg: "Token must be Present" })
        }
        next()
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




const authorisation = async function (req, res, next) {
    try {
         let token = req.headers["x-api-key"];
         let decodedtoken = jwt.verify(token, "functionup-thorium")
        
    let toBeupdatedblogId = req.params.blogId
        if (toBeupdatedblogId) 
        {
            let updatingAuthorId= await BlogsModel.find({_id:toBeupdatedblogId}).select({authorId:1, _id:0})
        let authorId= updatingAuthorId.map(x => x.authorId)
        console.log(authorId)
        let id = decodedtoken.AuthorId
        if (id != authorId) return res.status(403).send({ status: false, msg: "You are not authorised to perform this task" })
    }
        else {
            let authorId = req.query.authorId
         toBeupdatedblogId = authorId
         let id = decodedtoken.AuthorId
         if (id != authorId) return res.status(403).send({ status: false, msg: "You are not authorised to perform this task" })
        }
        next()
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}



module.exports.authenticate=authenticate
module.exports.authorisation=authorisation



