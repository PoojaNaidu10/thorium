const express = require('express');
const router = express.Router();

const StudentController = require("../Controller/StudentController")

router.post('/CreateStudent',StudentController.CreateStudent)
router.get('/GetUniqueSub',StudentController.GetUniqueSub)
router.get('/GetMathStud',StudentController.GetMathStud)
router.get('/GetStandard',StudentController.GetStandard)


module.exports = router