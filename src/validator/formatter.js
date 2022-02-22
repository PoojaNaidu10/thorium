function trim(){
    let name = '   Pooja Naidu   '
    console.log('Trimmed name is:',name.trim())
}

function changetoLowerCase(){
    let name = 'POOJA NAIDU'
    console.log('Name in lowercase is:',name.toLowerCase())
}

function changetoUpperCase(){
    let name = 'pooja naidu'
    console.log('Name in Uppercase is:',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
