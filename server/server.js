const express = require('express');
const veri = require('./middleware/verifytoken');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen('5000', console.log("server started at port 5000"));

app.use(express.urlencoded({extended: false})); 

app.use('/api/MR',veri ,require('./routes/main registry'))
app.use('/api/dos',veri, require('./routes/dos'));
app.use('/api/user', require('./routes/user'));
app.use('/api/adjudication',veri, require('./routes/adjudication'));
app.use('/api/counter',veri , require('./routes/counter'));

