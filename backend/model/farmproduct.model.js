const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmproductSchema = new Schema({
    name: {
    type:String,
    required: true,
    unique:true
    },
    description: {
    type:String,
    required: true
    },
    date: {
    type:String
    },
    // set database relationship, farmproduct belongs to a user
    creator: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
    }
    
    
},{
    timestamp: true,
});

const Farmproduct = mongoose.model('Farmproduct', farmproductSchema);

module.exports = Farmproduct;

