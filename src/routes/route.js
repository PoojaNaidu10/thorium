const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getDistrictsbyid",CowinController.getDistrictsbyid)
// get the weather of the london
router.get("/weather/getwatheroflondon",CowinController.getwatheroflondon)

router.get("/weather/weatherofcities",CowinController.weatherofcities)

router.post("/memes/postmemes",CowinController.postmemes)
module.exports = router;