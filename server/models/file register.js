const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    office:{
        type:String,
        require: true
    },
    main_id:{
        type:Number,
        require:true
    },
    s_no:{
        type:Number,
    },
    date:{
        type:Date,
        default: Date.now
    },
    file_ref:{
        type:String,
    },
    action_officer:{
        type:String
    }
});

const fileModel = mongoose.model("file_register",fileSchema);

module.exports = fileModel;