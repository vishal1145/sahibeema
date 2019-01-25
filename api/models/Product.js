var mongoose = require('mongoose');


var ProductSchema = new mongoose.Schema({
    title : String,
    description: String,
    media:{
        mediatype:String,
        mediaurl:String
    },
    highlights :[],
    published :{type:Boolean, default : false},
    category:{type:mongoose.Schema.Types.ObjectId,ref: 'Category'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
   });

mongoose.model('Product', ProductSchema);