const BlogsModel = require("../models/blogs")
const AuthorModel = require("../models/authorModel")


const createBlogs = async function (req, res) {
    try {
       
        let data = req.body
        let body = req.body.body
        let authorId = data.authorId
        let title = req.body.title
        let category = req.body.category
        if(Object.keys(data) ==0) return res.status(400).send({status:false, msg:"No input provided"})
        if (!body) return res.status(400).send({ status: false, msg: "body is required" })
        if (!authorId) return res.status(400).send({ status: false, msg: "authorId is required" })
        if (!title) return res.status(400).send({ status: false, msg: "title is required" })
        if (!category) return res.status(400).send({ status: false, msg: "category is required" })

         let author = await AuthorModel.findById(authorId)
        if (author) {
            let createBlog = await BlogsModel.create(data)
            res.status(201).send({ status: true, data: createBlog })
        } else {

            res.status(400).send({ status: false, msg: `This is the invalid authorid ` })
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const getBlogsData = async function (req, res) {
    try {
        
        let authorId= req.query.authorId
        let category=req.query.category
        let tags= req.query.tags
        let subcategory=req.query.subcategory
        
        let allBlogs = await BlogsModel.find({isdeleted : false,isPublished:true, $or:[{category:category}, {authorId:authorId},{tags: {$all:[tags]}},{subcategory: {$all:[subcategory]}}]})

        console.log(allBlogs)
        if (allBlogs.length > 0) res.status(200).send({ msg: allBlogs, status: true })
        else res.status(404).send({ msg: "No blog found", status: false })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const updateBlogs = async function(req, res) {

    try {

        let Id = req.params.blogId
        if (!Id) return res.status(400).send({ status: false, msg: "blogId is required" })
        let ifExist = await BlogsModel.findOne({_id:Id,isDeleted:false})
        if (!ifExist) {
            return res.status(404).send({ status: false, msg: "Not Found" })
        }
        if (ifExist.isDeleted == false) {

            let data = req.body
            
            let updatedBlog = await BlogsModel.findOneAndUpdate({ _id: Id }, data, { new: true })
            console.log(updatedBlog)
            return res.status(200).send(updatedBlog)
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


const deletBlog = async function (req, res) {
        try {
            let blogId = req.params.blogId;

           // if (!blogId) return res.status(400).send({ error: "blogId should be present in params" });
            let blog = await BlogsModel.findById(blogId);

            if (!blog) {
                return res.status(404).send("No such blog exists");
            }
            let deletedBlog = await BlogsModel.findOneAndUpdate({ _id: blogId }, { isDeleted: true }, { new: true });
            res.send({ status: "Deleted", data: deletedBlog });

        } catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }



    const deleteBlogByQuery = async function (req, res) {
        try {
            const data = req.query
            if ( Object.keys(data) ==0) {
                return res.status(400).send({ status: false, msg: "No input provided" })
            }
            const deletByQuery = await BlogsModel.updateMany(data, { isDeleted: true, deletedAt: new Date() }, { new: true })
            if (!deletByQuery) return res.status(404).send({ status: false, msg: "No such blog found" })
            res.status(200).send({ status: true, msg: deletByQuery })

        }
        catch (error) {
            res.status(500).send({ status: false, msg: error.message })
        }
    }

    module.exports.getBlogsData = getBlogsData
    module.exports.createBlogs = createBlogs
    module.exports.updateBlogs = updateBlogs
    module.exports.deletBlog = deletBlog
    module.exports.deleteBlogByQuery = deleteBlogByQuery