
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('My first ever api!')
});

router.get('/movies', function (req, res){
    res.send('["abc","def","ghi","jkl","mno"]')
});

router.get('/movies/:movieId', function(req, res){
    mov=["abc","def","ghi","jkl","mno"]
    let value = req.params.movieId;
    if(value>mov.length-1){
        res.send('"doesnt exist"')
    }else{
        res.send(mov[value])
    }
});

router.get('/moviez', function (req, res){
    res.send([ {id: 1,name:'abc'}, {id: 2,name:'def'},{id: 3,name:'ghi'},{id: 4,name:'jkl'},{id: 5,name:'mno'}])
});

router.get('/films/:filmId', function(req, res){
   let movi = ([{id: 1,name:'abc'}, {id: 2,name:'def'},{id: 3,name:'ghi'},{id: 4,name:'jkl'},{id: 5,name:'mno'}])
   let value = req.params.filmId;
   let found=false;
   for(i=0;i<movi.length;i++){
       if(movi[i].id==value){
           found=true
           res.send(movi[i])
           break;
       }
   }
   if(found==false){
       res.send('No movie exist with this id')
   }

})

module.exports = router;
