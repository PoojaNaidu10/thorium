const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const blogsController= require("../controllers/blogsController")
const Middleware = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors", authorController.createAuthor )

router.post("/createBlogs",Middleware.authenticate, blogsController.createBlogs)

router.get("/getblogdata", Middleware.authenticate,blogsController.getBlogsData)

router.put("/updateBlogs/:blogId", Middleware.authenticate,Middleware.authorisation,blogsController.updateBlogs)

router.delete("/delete/:blogId", Middleware.authenticate,Middleware.authorisation,blogsController.deletBlog)

router.delete("/deleteBlogByQuery",Middleware.authenticate,Middleware.authorisation,blogsController.deleteBlogByQuery)

router.post("/loginAuthor", authorController.loginAuthor)

module.exports = router;