var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var ArticleSchema = new mongoose.Schema({
image:String,
posttitle : String,
description : String,
category  : {type : mongoose.Schema.Types.ObjectId, ref:'Category' },
published :{
    type : Boolean,
    default : false
},
likes: [{
    userid : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    like_time : { type: Date, default: Date.now },
    islike:{ type:Boolean , default : true}
}],
comments: [{
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    commentText:String,
    user_name:String,
    comment_time: { type: Date, default: Date.now }
}],
created_at: { type: Date, default: Date.now },
updated_at: { type: Date, default: Date.now },
created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});
module.exports=mongoose.model('Article', ArticleSchema);