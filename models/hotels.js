const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({

    name : {
        type : String
    },
    address:{
        type: String
    } ,
    phone:{
         type: Number
    },
    img:{
        type: String
    }
});


const Hotels = mongoose.model("Hotels", hotelSchema);

module.exports = Hotels;


