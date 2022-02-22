var today = new Date();
var dd = String(today.getDate());



function printDate(){
    console.log(dd)
}

module.exports.printDate = printDate