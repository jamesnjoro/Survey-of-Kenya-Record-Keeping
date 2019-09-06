const mongoose = require('mongoose');

const adjudicationSchema = mongoose.Schema({
  
    main_id:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    subject_letter:{
        type:String,
    },
    surveyor:{
        type:String,
    }

});

const adjudicationModel = mongoose.model("adjudication",adjudicationSchema);

module.exports = adjudicationModel;