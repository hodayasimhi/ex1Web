//mongoose
const mongoose = require('mongoose');


//creating schema
//International tournaments for youngr
const schema = {
    Serial : {type: String, required: true}, 
    name : {type: String, required: true},
    date: {type: String, required: true},
    place: { type: String, required: true },
    type: { type: String, required: true },
    time: {type: Number, required: true},
    groupA : [{
       id: {type: String, required: true},
       name:{type: String, required: true},
       number: {type: String, required: true}
      }],
      groupB : [{
         id: {type: String, required: true},
         name:{type: String, required: true},
         number: {type: String, required: true}
        }],
    winner: { type: String, required: true }
   }
const IntTournamentsY_schema = new mongoose.Schema(schema)
//Connection schema to DB
   const IntTournamentsY = mongoose.model('Tournament', IntTournamentsY_schema);

   module.exports = IntTournamentsY;