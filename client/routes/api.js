const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const check=require('../models/list');

const db = 'mongodb://localhost:27017/Employee';
mongoose.Promise=global.Promise;
mongoose.connect(db,function(err){
    if(err){
        console.err("Error!!"+err);
    }
    else 
    console.log("connected successfully to mongodb on port : " + db);
});

router.get('/lists/',function(req,res){
   console.log("Get request for all employee data");
   check.find({})
   .exec(function(err,lists){
       if(err){
           console.log("Erroe retreieving data " + err);
       }
       else {
           res.json(lists);
        //    console.log(lists);
       }
   });
});




router.get('/lists/:code/',function(req,res){
    var code=req.params.code;
    console.log("Get request for an employee code");
    check.find({code})
    .exec(function(err,list){
        if(err){
            console.log("Erroe retreieving data " + err);
        }
        else {
            res.json(list);
            // console.log("Data " + list);
        }
    });
 });

 
router.post('/list/',function(req,res){
    console.log("Post an employee data");
    var newEmp=new check();

    newEmp.code=req.body.code;
    newEmp.name=req.body.name; 
    newEmp.gender= req.body.gender; 
    newEmp.annualSalary= req.body.annualSalary; 
    newEmp.DOB=req.body.DOB;
    newEmp.save(function(err,insertedEmp){
        if(err){
            console.log("error inserting data");
        }
        else{
            console.log("new"+insertedEmp);
            res.json("new"+insertedEmp);
        }
    });
});

module.exports=router;