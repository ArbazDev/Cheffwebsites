const mongoose = require('mongoose');
const deliverySchema = mongoose.Schema({
    chef: {
        type: String,
        required: true
    },
    order: {
        type: String,
        required: true
    },
    Date :{
        type: Date,
        required:true
    },
    adress:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('delivery', deliverySchema);