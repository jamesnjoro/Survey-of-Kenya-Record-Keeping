const mongoose = require('mongoose');

const MRSchema = new mongoose.Schema({
    main_id:{
        type: Number,
        required:true
    },
    inword_NO:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },
    surveyor:{
        type: String,
        required:true
    },
    job_type:{
        type: String,
        required:true
    },
    file_reference:{
        type: String,
        required:true
    },
    subject_letter:{
        type: String,
        required:true
    },
    fowarded_to:{
        type: String,
        required:true
    }
});

const main_registry = mongoose.model('main_registry', MRSchema);

module.exports = main_registry;