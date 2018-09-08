const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hotelsapi',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database is connected");
    }
});




mongoose.Promise = Promise;

module.exports.Hotels = require('./hotels');

module.exports.Users = require('./users');

module.exports.Seller = require('./sellers');