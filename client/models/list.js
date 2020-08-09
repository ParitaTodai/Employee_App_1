const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema=new Schema({
    code: String ,
    name: String ,
    gender: String ,
    annualSalary: Number ,
    DOB: String,
});

module.exports=mongoose.model('list',listSchema,'lists');