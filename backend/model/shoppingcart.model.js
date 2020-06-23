const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoppingcartSchema = new Schema({
    
    date: {
    type:Date
    },
    // set database relationship, shoppingcart belongs to a user
    creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
    },
    // many to one relationship with farmproducts and shopping cart
    farmproducts: [{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Farmproduct'   
    }]
    
},{
    timestamp: true,
});

const Shoppingcart = mongoose.model('Shoppingcart', shoppingcartSchema);

module.exports = Shoppingcart;
