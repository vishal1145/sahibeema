var mongoose = require('mongoose');


var ArticleCategorySchema = new mongoose.Schema({
    name: String,
    created_at: { type: Date, default: Date.now }
});

mongoose.model('ArticleCategory', ArticleCategorySchema);