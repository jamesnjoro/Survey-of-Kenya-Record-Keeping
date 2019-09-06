const mongoose = require('mongoose');

const dosSchema = new mongoose.Schema({
    main_id:{
        type:Number,
    },
    entry_no:{
        type:Number, 
    },
    job_comps:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    approved:{
        type:Boolean,
        default:false
    },
    fowarded_to:{
        type:String,
    },
    reverse_to:{
        type:String
    }
});

const dos = mongoose.model('Director_of_survey',dosSchema);

module.exports = dos;