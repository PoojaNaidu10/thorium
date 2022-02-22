let obj = require('../logger/logger.js')
let helper = require('../util/helper.js')
let formatter =require('../validator/formatter.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.mymsg('Welcome to my application. I am pooja and a part of functioup Thorium cohort')
    helper.printCurrentDate()
    helper.printCurrentMonth()
    helper.printBatchInfo()

    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()

    res.send('My first ever api!!!!!')
});

module.exports = router;