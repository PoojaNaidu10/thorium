//let obj = require('../logger/logger.js')
let obj1 = require('../util/helper.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
   // obj.mymsg('Welcome to my application. I am pooja and a part of functioup Thorium cohort')
    obj1.printDate()
    res.send('My first ever api!!!!!')
});

module.exports = router;