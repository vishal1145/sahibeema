var mongoose = require('mongoose');


var CategorySchema = new mongoose.Schema({
    title: String,
    image : String,
    icon : String,
	important_facts: String,
	insurance_type: String,
	biggest_ins_company: String,
    created_at: { type: Date, default: Date.now }
});

mongoose.model('Category', CategorySchema);
