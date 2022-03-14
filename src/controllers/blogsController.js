const BlogsModel = require("../models/blogs")
const AuthorModel = require("../models/authorModel")


const createBlogs = async function (req, res) {
    try {
        let data = req.body
        let authorId = data.authorId
        let author = await AuthorModel.findById(authorId)
        if (author) {
            let createBlog = await BlogsModel.create(data)
            res.status(201).send({ status: true, data: createBlog })
        } else {
            
            res.status(400).send({ status: false, msg: `Bad Request` })
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const getBlogdata = async function (req, res) {
    try {

        let blogerdata = await BlogsModel.find({ isDeleted: { $in: ["false"] }, isPublished: { $in: ["true"] } })
        res.status(200).send({ status: true, data: blogerdata });
        //console.log(blogerdata)
        if (!blogerdata) {
            return res.status(404).send({ error: "No such data found" });
        }

        let authorId = req.query.authorId
        let category = req.query.category
        let filterBlogs = await BlogsModel.filter({authorId, category})
        res.status(200).send({ status: true, data: filterBlogs });
        //console.log(filterBlogs)
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }

}

// const getBlogdata = async function (req, res) {
//     try {

//         let blogerdata = await BlogModel.find({ isDeleted: { $in: ["false"] }, isPublished: { $in: ["true"] } })
//         res.status(200).send({ status: true, data: blogerdata });

//         if (!blogs) return res.status(404).send({ error: "No such data found" });

//         let authorId = req.params.authorId
//         let category = req.params.category
//         let filterBlogs = await BlogModel.filter({ authorId, category })
//         //console.log(filterBlogs)
//         // console.log(blogerdata)
//         res.status(200).send({ status: true, data: filterBlogs })
//     }
//     catch (error) {
//         res.status(500).send({ status: false, msg: error.message })
//     }

// }

const updateBlogs = async function(req , res){

    try {
        
        let Id = req.params.blogId
    
        let ifExist = await BlogsModel.findById(Id)
        if(!ifExist){
            return res.status(404).send( { status : false , msg : "Not Found" } )
        }
    
        if(ifExist.isDeleted == false){
    
            let data = req.body
            data.publishedAt = Date.now()
            data.isPublished = true
    
        
        let updatedBlog = await BlogsModel.findByIdAndUpdate( { _id: Id }, { $set: data  }, { new: true }  )
        console.log(updatedBlog)
         return res.send(updatedBlog)
    
        }
    
    
    
    } catch (error) {
        res.status(500).send( { status : false , msg : error.message } )
        
    }
        
        
 }

 const deletBlog = async function (req,res) {
     try{
    let Id = req.params.blogId;
    let ifExist = await BlogsModel.findById(Id)
        if(!ifExist){
            return res.status(404).send( { status : false , msg : "Not Found" } )
        }
    let deletedBlog= await BlogsModel.findOneAndUpdate({_id:blogId},{$set:{isDeleted : true}}, {$new:true});
    res.status(200).send({ data : deletedBlog});
     }
     catch(error){
        res.status(500).send( { status : false , msg : error.message } )
     }
  
  }

  const deleteBlogByQuery = async function (req, res) {
    try {
        const data = req.query
        console.log(data)

        if (!data) return res.status(400).send({ error: "Please enter some data to campare" })

        const timeDate = moment()

        const dataforUpdation = { ...data , isDeleted : true , deletedAt : timeDate}

        const result = await BlogsModel.updateMany(data, dataforUpdation , { new: true })

        if (!result) res.status(404).send({ error: " No data found" })

        res.status(200).send({ data: result })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




module.exports.getBlogdata = getBlogdata
module.exports.createBlogs = createBlogs
module.exports.updateBlogs=updateBlogs
module.exports.deletBlog=deletBlog
module.exports.deleteBlogByQuery=deleteBlogByQuery