var mongoose = require('mongoose');


var AdvertisementSchema = new mongoose.Schema({
    image : String,
    redirecturl: String,
    size : String,
    page: String,
    area : String
});

mongoose.model('Advertisement', AdvertisementSchema);
