const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const counter = require('../models/counter');

const router = express.Router();

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

            counter.find()
            .then(doc => res.json(doc))
            .catch(err => console.log(err));


            
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

            const {main_id ,department} = req.body;
            mainid_gen(main_id,department);
            res.json({msg:'tracking progress'});

        }})
    });
        
        router.get('/:id', (req, res)=>{
            jwt.verify(req.token, 'survey', (err, authdata)=>{
                if(err){
                    console.log(err);
                    res.status(403);
                    res.json({msg:"unauthorised access"})
                }else{
        
                    
                counter.find({main_id:parseInt(req.params.id)},(err, doc)=>{
                        if(err) throw err;
                        if(doc[0] == null) {
                            res.json({message:`no record with id of ${req.params.id}`});
                            res.end();
                        }else{
                            res.json(doc);
                            res.end();
                        }
                        
                })
        
        
                }
            })
           
        });


        function mainid_gen(id,department){
            let value;
            let Iid = parseInt(id);
            counter.findOne({ main_id: Iid })
        .sort('-count')  // give me the max
        .exec(function (err, doc) {
            if(err) console.log(err);
            if(!doc) {
                var cont = new counter({
                    main_id:Iid, count:1 , department:department
                });
                cont.save();
                console.log(cont);
            }else{
               var ct = doc.count + 1;
                const ne = new counter({main_id:Iid , count:ct, department:department});
                ne.save();
                console.log(ne);
            }
      
        });
            
        }

        

module.exports = router;