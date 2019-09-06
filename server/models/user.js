const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    department:{
        type:String,
        require: true
    }
});

const usermodel = new mongoose.model("user", userSchema);

module.exports = usermodel;