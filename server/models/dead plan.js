const mongoose = require('mongoose');

const deedSchema = mongoose.Schema({
    office:{
        type:String,
        require: true
    },
    main_id:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    no_deed_plans:{
        type:Number,
    },
    fr_no:{
        type:Number,
    },
    fowarded_to:{
        type:String
    },
    reversed_to:{
        type:Number,
    }

});

const deedModel = mongoose.model("Deed_plan",deedSchema);

module.exports = deedModel;