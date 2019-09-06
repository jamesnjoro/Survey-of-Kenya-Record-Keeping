const verifytoken = (req, res, next)=>{
    const bearerheader =  req.headers['authorization'];

    if(typeof bearerheader !== 'undefined'){
        const bearer = bearerheader.split(' ');
        const bearerToken = bearer[1];
        req.token =bearerToken;
        next();
    }else{
        res.status(403);
        res.json({msg:"unauthorized"});
    }
}

module.exports = verifytoken;
