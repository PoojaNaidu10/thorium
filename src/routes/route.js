let obj = require('../logger/logger.js')
let helper = require('../util/helper.js')
let formatter =require('../validator/formatter.js')
let lodash = require('lodash')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.mymsg('Welcome to my application. I am pooja and a part of functioup Thorium cohort')
    helper.printCurrentDate().
    helper.printCurrentMonth()
    helper.printBatchInfo()

    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()

    res.send('My first ever api!!!!!')
});

router.get('/hello', function (req, res){
   let months = ['jan','feb','mar','apr','may','june','jul','aug','sep','oct','nov','dec']
   let subArrays = lodash.chunk(months, 3)
   console.log('Chunks of months: ', subArrays)  
    res.send('This is my api!')

    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let lastNumber = lodash.tail(oddNumbers)
    console.log('Last 9 odd numbers:', lastNumber)
        
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6, 7]
    let arr3 = [8, 5, 5]
    let arr4 = [6, 4 ,3]
    let arr5 = [8, 9, 5, 6]
    console.log('Merged array with unique values:',lodash.union(arr1,arr2,arr3,arr4,arr5))

    let movie1 = ['horror', 'The shining']
    let movie2 = ['drama', 'Titanic']
    let movie3 = ['thriller', 'Shutter Island']
    let movie4 = ['fantasy', 'Pans Labyrinth']
    let movieObject = lodash.fromPairs(movie1,movie2.movie3,movie4)
    console.log('Movies object:', movieObject)
});


module.exports = router;