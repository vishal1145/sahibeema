console.log("starting api");

var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var http = require('http');
var process = require('process');
process.on('uncaughtException', function (err) {
    console.log("uncaughtException occured" + JSON.stringify(err));
})

var app = express();
// var cors = require('cors');
// app.use(cors())
// var router = express.Router();
// router.all('*', cors());

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));
app.use('/', serveStatic(__dirname + '/')); // serve static files
app.use('/public', serveStatic(__dirname + '/public')); // serve static files
app.use('/vendors', serveStatic(__dirname + '/vendors')); // serve static files
app.use('/dist', serveStatic(__dirname + '/dist')); // serve static files
app.use('/wp-content', serveStatic(__dirname + '/wp-content')); // serve static files
app.use('/wp-includes', serveStatic(__dirname + '/wp-includes')); // serve static files
//app.set('superSecret', keys.sessionkey); // secret variable


var server= http.createServer(app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //var err = new Error('Not Found');
  //err.status = 404;
  //next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    //res.locals.message = err.message;
    //res.locals.error = req.app.get('env') === 'development' ? err : {};
    //// render the error page
    //console.log(err)
    //res.status(err.status || 500);
    //res.redirect('/error');
});

app.listen(9001, function () {
    console.log('App Listening at port : ' + 9001);
});


app.get('*', function (req, res) {
    res.sendfile('index.html');
});