const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


const getIpAddressAndTime= async function(req, res){
    console.log("This is your ip address and time")
}



module.exports.getIpAddressAndTime=getIpAddressAndTime

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData