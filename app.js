var express = require('express');
var app = express();
var router = require('./routes/main')(app);
// var redisConn = require('./redisConn');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));
// app.use(express.static('routes'));


