const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    emailId: String,
    phone : Number
});


const Users = mongoose.model("Users", userSchema);

module.exports = Users;

