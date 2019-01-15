var mongoose = require('mongoose');


var CategorySchema = new mongoose.Schema({
    name: String,
    created_at: { type: Date, default: Date.now }
});

mongoose.model('Category', CategorySchema);
