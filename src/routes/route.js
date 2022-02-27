const express = require('express');
const router = express.Router();
const BookModel= require("../models/userModel.js")
const BookController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)

router.post("/getBooklist", BookController.getBooklist)

module.exports = router;