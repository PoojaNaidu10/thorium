const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const blogsController= require("../controllers/blogsController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors", authorController.createAuthor )

router.post("/createBlogs", blogsController.createBlogs)

router.get("/getblogdata", blogsController.getBlogdata)

router.put("/updateBlogs/:blogId",blogsController.updateBlogs)

router.delete("/delete/:blogId",blogsController.deletBlog)

router.delete("/deleteBlogByQuery",blogsController.deleteBlogByQuery)




module.exports = router;