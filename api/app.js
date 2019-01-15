var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var ithours = require('ithours');

var config = {
    codes : 'codes.json',
    environment:'environment.json'
}
var itHoursModule =  ithours.initilaize(app,config);
console.log(itHoursModule.core)
var port = itHoursModule.core.getEnvironmentVariable('port')
server.listen(port);