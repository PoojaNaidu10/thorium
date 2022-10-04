const StudentModel = require('../Model/StudentModel')

// Creating a students
const CreateStudent = async function(req, res){
      try{
        const requestBody = req.body
        const {Name,RollNo,Address,MobileNo,Standard,Subject} = requestBody

        const NewStudent = await StudentModel.create(requestBody)
        res.status(201).send({status:true, data:NewStudent, msg:"Student created successfully"})

      } catch(error){
        res.status(500).send({status:false, msg:error.msg})
      }
}

// Get unique subjets of the standard
const GetUniqueSub = async function(req, res){
      try{
        
        const queryParam = req.query

        const UniqueStud = await StudentModel.find(queryParam).select({_id:0,Name:1,Standard:1,Subject:1})
        res.status(200).send({status:true, data: UniqueStud, msg:"Maths Subject Students Standard Data"})

      }catch(error){
        res.status(500).send({status:false, msg:error.msg})

      }
}

// Get Maths Student Count
const GetMathStud = async function(req,res){
    try{

        const queryParam = req.query

        const MathStud = await StudentModel.find(queryParam).count()
        res.status(200).send({status:true, data: MathStud, msg:"Maths Students Data"})

    }catch(error){
        res.status(500).send({status:false, msg:error.msg})

    }
}

// Standards having subject maths
const GetStandard = async function(req, res){
    try{
        const queryParam = req.query

        const MathStud = await StudentModel.find(queryParam).select({_id:0,Standard:1})
        res.status(200).send({status:true, data: MathStud, msg:"Maths Subject Students Standard Data"})

       }catch(error){
        res.status(500).send({status:false, msg:error.msg})

     }
}

module.exports.CreateStudent= CreateStudent
module.exports.GetUniqueSub = GetUniqueSub
module.exports.GetMathStud = GetMathStud
module.exports.GetStandard = GetStandard

/*if function A calling to function B , if function B return pending state

 Pending State this is a initial state of the promise function, after a pending state the are 
 twi stages whis is Resolve Or Rejected if the execution is resolve than it goes in .then()
 if the execution is rejected it will goes in to the .catch()

 e.g:

 Const Prom = new Promises((resolve, reject){
  const a = 10
  const b= 10
   if (a===b){
    resolve()
   }else{
    reject()
   }

  // After a pending state

   Prom()
   .then(function(){
        console.log("Promise resolved succefully")
   })

   .catch(function(){
        console.log("Promise rejected")
   })

 })

*/
