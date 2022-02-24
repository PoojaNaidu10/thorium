<<<<<<< HEAD
function printDate(){
    let today = new Date()
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()

    console.log('Current date is:', date)
}

function printMonth(){
    let today = new Date()
    let month = today.getMonth()+1

    console.log('Current month is:' ,month)
}

function getBatchInfo(){
    console.log('Thorium,W3D1, the topic of today is Nodejs module system')
}

module.exports.printCurrentDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInfo = getBatchInfo
=======
var today = new Date();
var dd = String(today.getDate());



function printDate(){
    console.log(dd)
}

module.exports.printDate = printDate
>>>>>>> 6c455278db23fe5d61d402eeced8bf8010ebeb2e
