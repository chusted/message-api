var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    
    text: { type: String, unique: true},
    rating: Number
});

module.exports = mongoose.model('Message', messageSchema);