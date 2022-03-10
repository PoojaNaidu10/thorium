const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
//const {authenticate,authorise}=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users1/:userId", userController.getUserData)


router.put("/users3/:userId", userController.updateUser)
router.delete('/users4/:userId', userController.deleteuser)

module.exports = router;