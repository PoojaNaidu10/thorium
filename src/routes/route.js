const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings":[
               {
                   "bookingNumber":1,
                   "sportId":"",
                   "centerId":"",
                   "type":"private",
                   "slot":"165842594656",
                   "bookedOn":"25/02/2022",
                   "bookedFor":"26/02/2022"
               }
           ]
           
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings":[
            {
                "bookingNumber":2,
                "sportId":"",
                "centerId":"",
                "type":"private",
                "slot":"165842594656",
                "bookedOn":"25/02/2022",
                "bookedFor":"26/02/2022"
            }
        ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings":[
            {
                "bookingNumber":3,
                "sportId":"",
                "centerId":"",
                "type":"private",
                "slot":"165842594656",
                "bookedOn":"25/02/2022",
                "bookedFor":"26/02/2022"
            }
        ]
       },
   ]
 
   router.post('/players', function (req, res) {
 
    let player = req.body;
    let playerName = player.name
    for (let i = 0; i < players.length; i++){
        if(players[i].name == playerName){
            res.send('Player already exist')
        }
    }
    players.push(player);
   console.log("Here is the player array", players);
    res.send(players);
   });
   router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    let name = req.params.playerName;
    let isPlayerPresent = false;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            isPlayerPresent = true;
        }
    }
    if (!isPlayerPresent) {
        res.send('Player not present');
    }
    res.send('Player is present')

    let booking = req.body;
    let bookingId = req.params.bookingId;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            for (let j = 0; j < players[i].bookings.length; j++) {
                if (players[i].bookings[j].bookingNumber == bookingId) {
                   return res.send('Booking with this id is already present for the player');
                }
            }
            players[i].bookings.push(booking);
        }
    }
    res.send(players);
})

  
module.exports = router;

  