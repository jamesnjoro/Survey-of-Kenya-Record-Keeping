const express = require('express');
const router = express.Router();
const adjudication = require('../models/adjudication');
const counter = require('../models/counter');
const jwt = require('jsonwebtoken');


const mongoose = require('mongoose');
const db =' mongodb://localhost/SurveyDB';


mongoose.connect(db, {useNewUrlParser : true})
.then(console.log('connected succesfully'))
.catch( err => console.log(err));

router.get('/', (req,res)=>{
    jwt.verify(req.token, 'survey', (err, authdata)=>{
        if(err){
            console.log(err);
            res.status(403);
            res.json({msg:"unauthorised access"})
        }else{

            adjudication.find()
            .then(doc => res.json(doc))
            .catch(err => console.log(err));


            
        }
    })
    
});

router.get('/:id', (req, res)=>{
    jwt.verify(req.token, 'survey', (err, authdata)=>{
        if(err){
            console.log(err);
            res.status(403);
            res.json({msg:"unautharised access"})
        }else{

            
            adjudication.findOne({main_id:parseInt(req.params.id)},(err, doc)=>{
                if(err) throw err;
                if(!doc) res.json({message:`no record with id of ${req.params.id}`})
                res.json(doc);
        })


        }
    })
   
});

router.post('/add', (req,res)=>{
    jwt.verify(req.token, 'survey', (err, authdata)=>{
        if(err){
            console.log(err);
            res.status(403);
            res.json({msg:"unautharised access"})
        }else{

            const {main_id , surveyor ,subject_letter} = req.body;
            if( !surveyor || !main_id || !subject_letter){
                res.status(400);
                res.json({message : "Not all fields have been provided"});
            }else{
                res.status(200);
               
                /*

                remember to add calling method asynchronously otherwise it is buggy

        */
                
                
                   
                    const newA = new adjudication({
                        main_id,surveyor,subject_letter
                    });
                    newA.save()
                    .then( res.json(newA))
                    .catch(err => console.log(err))
                 
            
            }



        }
    })


   
});

router.put('/edit:id',(req,res)=>{
    jwt.verify(req.token, 'survey', (err, authdata)=>{
        if(err){
            console.log(err);
            res.status(403);
            res.json({msg:"unautharised access"})
        }else{

            const {inword_NO , surveyor , file_reference , subject_letter} = req.body;
    main_registry.findOneAndUpdate({main_id:parseInt(req.params.id)},{inword_NO,surveyor,file_reference,subject_letter},(err,doc)=>{
        if(err) console.log(err);
        res.json(doc);
    })



        }
    })

    
});

function mainid_gen(){
    let value;
    counter.findOne({name:"MR"} , (err,doc)=>{
        if(err) console.log(err);
        if(doc == null) {
            var cont = new counter({
                name:"MR", count:1
            });
            cont.save();
            console.log(doc);
        }else{
            var ct = doc.count + 1;
            counter.findOneAndUpdate({name:"MR"},{count:ct}, (err,doc2)=>{
                if(err) console.log(err);
                console.log(doc2);
                
            });
        }
    });
}



module.exports = router;