const middleware =function(req, res,next){
    console.log("this is the middleware")

    var DateAndTime = new Date().toISOString().replace(/T/,' ').replace(/\..+/, '')
    let IpAddress = req.socket.remoteAddress
    console.log(DateAndTime,IpAddress)

    next()
   }


   module.exports.middleware=middleware