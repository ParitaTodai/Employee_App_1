const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const api=require('./routes/api.js');

const port = 3000;

const app=express();

const cors = require('cors');


app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//    next();
//   })


app.use(express.static(path.join(__dirname,'../src')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(){
    console.log("port running on "+port);
});