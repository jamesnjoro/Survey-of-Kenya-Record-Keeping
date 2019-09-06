const express = require('express');
const mongoose = require('mongoose');
const dos = require('../models/dos');

const router = express.Router();

const db =' mongodb://localhost/SurveyDB';

mongoose.connect(db, {useNewUrlParser : true})
.then(console.log('connected succesfully'))
.catch( err => console.log(err));

router.post('/add',(req,res)=>{
    const {main_id} = req.body;

    const Dos = new dos({
        main_id
    });
    Dos.save();
    res.json(Dos);
});

router.put('/edit:id', (req,res)=>{
    const {entry_no,job_comps,approved,fowarded_to} = req.body;
    dos.findOneAndUpdate({main_id:parseInt(req.params.id)},{entry_no,job_comps,approved,fowarded_to},(err,doc)=>{
        if(err) console.log(err);
        res.json(doc);
    });
});

router.get('/', (req,res)=>{
    dos.find((err,doc)=>{
        if(err) console.log(err)
        res.json(doc);
    })
});
module.exports = router;