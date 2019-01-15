var mongoose = require('mongoose');


var CategorySchema = new mongoose.Schema({
    title: String,
    image : String,
    icon : String,
    created_at: { type: Date, default: Date.now }
});

mongoose.model('Category', CategorySchema);
