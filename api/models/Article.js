var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var PostSchema = new mongoose.Schema({
image:String,
posttitle : String,
description : String,
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
created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'artist_user' },
updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'artist_user' },

});
module.exports=mongoose.model('Post', PostSchema);