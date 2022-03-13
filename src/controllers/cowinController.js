let axios = require("axios");
const { $where } = require("../models/userModel");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistrictsbyid = async function (req, res){
    try{
        let districtsid = req.query.districtsid
        let date = req.query.date
        console.log(`query params are: ${districtsid} ${date}`)

        var options = {
              method: "get",
              url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtsid}&date=${date}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({msg:result.data })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({msg: error.message})

    }
}

let getwatheroflondon = async function (req, res){
    try{
        let city =req.query.q
        let appid =req.query.appid
        console.log(`query params are: ${city} ${appid}`)

        var weather ={
            method: "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        } 

        let result = await axios(weather)
        console.log(result.data)
        res.status(200).send({msg:result.data })

    }
    catch (error) {
        console.log(error)
        res.status(500).send({msg: error.message})
    }
}

let weatherofcities = async function (req, res){
    try{
        cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]  
        cityobj = [ ]
        
        for(i=0; i<cities.length; i++){
            let obj = {city:cities[i]}
            let temparature = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0c775a274495994d0d224b9244386fb7`)
            console.log(temparature.data.main.temp)

            obj.temp=temparature.data.main.temp
            cityobj.push(obj)
        }

        let SortedArray = cityobj.sort( function(a, b) {
            return a.temp - b.temp
        })

        console.log(SortedArray)
        res.status(200).send({msg:SortedArray})
    }
    catch (error){
        console.log(error)
        res.status(500).send({msg: error.message})
    }
}

let postmemes = async function (req, res){
    try{
       let  template_id =req.query.template_id
       let  text0 = req.query.text0
       let text1 = req.query.text1
       let  username = req.query.username
       let  password = req.query.password

       console.log(`query params are:${template_id} ${text0} ${text1}  ${username} ${password}`)

       var memes = {
           method:`post`,
           url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
       } 

       let result = await axios(memes)
       console.log(result.data)
       res.status(200).send({msg:result.data})
    }
    catch (error) {
        console.log(error)
        res.status(500).send({msg: error.message})
    }
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsbyid=getDistrictsbyid
module.exports.getwatheroflondon=getwatheroflondon
module.exports.weatherofcities=weatherofcities
module.exports.postmemes=postmemes