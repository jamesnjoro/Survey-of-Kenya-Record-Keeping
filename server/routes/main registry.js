const express = require('express');
const router = express.Router();
const main_registry = require('../models/main registry');
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
            res.json({msg:"unautharised access"})
        }else{

            main_registry.find()
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
            res.json({msg:"unauthorised access"})
        }else{

            
        main_registry.findOne({main_id:parseInt(req.params.id)},(err, doc)=>{
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

                    const {inword_NO , surveyor , file_reference , subject_letter, fowarded_to,job_type} = req.body;
            if(!inword_NO || !surveyor || !file_reference || !subject_letter|| !fowarded_to){
                res.status(400);
                res.json({message : "Not all fields have been provided"});
            }else{
                res.status(200);
                var main_id ;
                /*

                remember to add calling method asynchronously otherwise it is buggy

        */
               
                mainid_gen(add);
                function add(doc2){
                        main_id = parseInt(doc2.count);
                        const newMR = new main_registry({
                            main_id, inword_NO,surveyor,file_reference,subject_letter,fowarded_to,job_type
                        });
                        newMR.save()
                        .then( res.json(newMR))
                        .catch(err => console.log(err))
                    
                }
                
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

function mainid_gen(callback){
    let value;
    counter.find({name:"MR"} , (err,doc1)=>{
        if(err) console.log(err);
        if(doc1[0]==null) {
            var cont = new counter({
                name:"MR", count:1
            });
            cont.save();
            console.log(cont);
        }else{
            counter.findOneAndUpdate({name:"MR"},{$inc:{count:1}},{new:true}, (err,doc2)=>{
                if(err) console.log(err);
                console.log(doc2);
                callback(doc2);
            });
        }
    });
    
}



module.exports = router;