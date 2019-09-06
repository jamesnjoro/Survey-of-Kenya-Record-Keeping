const mongoose = require('mongoose')
const express = require('express');
const user = require('../models/user')
var JWT = require("jsonwebtoken")

const router = express.Router();
const db =' mongodb://localhost/SurveyDB';
mongoose.connect(db, {useNewUrlParser : true})
.then(console.log('connected succesfully'))
.catch( err => console.log(err));

router.post('/register', (req,res)=>{
    const {name, email , password , department} = req.body;
    
    user.findOne({email},(err,doc)=>{
        if(!doc){
            const u = new user({name,email,password,department});
            u.save()
            .then(res.json(u))
            .catch(err=> console.log(err))
        }else{
            res.status(403);
            res.json({msg:"Email already exists"})
            
        }
        if(err) console.log(err)
    });
});

router.post('/login', (req,res)=>{
    const {email , password} = req.body;
    user.findOne({email}, (err, doc)=>{
        if(!doc){
            res.status(403);
            res.json({msg:"Email not in the system"})
        }else{
            if(doc.password === password){
                JWT.sign({doc}, 'survey',{expiresIn:"10h"},(err , token) => {
                    res.json({token,user:doc.name,type:doc.department});
                })
            }else{
                res.status(401);
                res.json({msg:"Password Incorrect"});
            }
        }
    })
});


module.exports = router;
