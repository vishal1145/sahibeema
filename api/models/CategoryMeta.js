var mongoose = require('mongoose');


var CategoryMetaSchema = new mongoose.Schema({
    categoryid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    key: {
        type: String,
        enum: ['COMPANYDETAIL', 'PHONENUMBER']
    },
    value: {},
    created_at: { type: Date, default: Date.now }
});

mongoose.model('CategoryMeta', CategoryMetaSchema);
