var express = require('express');
var app = express();
var router = require('./routes/main')(app);
var redisConn = require('./routes/redisConn');
var bodyParser = require('body-parser');
var ejs = require('ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://52.231.66.82:8545"));
// console.dir(web3)
var network_version = web3.version.api;
console.log(network_version);

// app.use(express.static('routes'));


