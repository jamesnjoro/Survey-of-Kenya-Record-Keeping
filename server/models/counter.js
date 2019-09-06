const mongoose = require('mongoose');
 counterSchema = new mongoose.Schema({
    name:{
        type:String,
    }, 
    main_id:{
        type:Number,
    },
    count:{
         type:Number,
         required:true
     },
     department:{
        type:String
     }
 });

 const counter = mongoose.model("counter", counterSchema);
 module.exports = counter;