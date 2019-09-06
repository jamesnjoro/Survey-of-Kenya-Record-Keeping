const mongoose = require('mongoose');

const despatchSchema = mongoose.Schema({
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
    ref:{
        type:String,
    },
    action_officer:{
        type:String
    }
});

const despatchModel = mongoose.model("despatch_register",despatchSchema);

module.exports = despatchModel;