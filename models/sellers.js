const mongoose = require('mongoose');


const sellerSchema = new mongoose.Schema({

    name : {
        type : String
    },
    phone : {
        type : Number
    },
    emailId:{
        type:String
    }


});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;

