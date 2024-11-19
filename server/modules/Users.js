const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,  
    phone: Number,
})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel