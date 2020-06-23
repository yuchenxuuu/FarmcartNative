const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: 
    {
    type: String,
    required: true
    // unique:true
    },
    password: {
    type: String,
    minlength: 6
    },
    email: {
    type: String
    // required: true
    // unique:true
    },
    image: {
        type: String
    },
    usertype: {
        type: String
    },
    farmproducts: [{
        type: String
    }],
    address: { type: String },
    location: {
        lat: { type: Number},
        lng: { type: Number}
    }
},{
    timestamp: true
});

userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);


module.exports = User;

