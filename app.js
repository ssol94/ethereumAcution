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

// app.use(express.static('routes'));




/*
  web3 ¿¬µ¿
*/
/*var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://52.231.66.82:8545"));

console.log('network_version', web3.version.network);
console.log('version:'+web3.version.api);   
web3.eth.defaultAccount = web3.eth.accounts[4];
console.log('coinbase:'+web3.eth.coinbase);

var vc = web3.eth.contract(
[
	{
		"constant": false,
		"inputs": [],
		"name": "getAllWinner",
		"outputs": [
			{
				"name": "ele",
				"type": "bytes[]"
			},
			{
				"name": "",
				"type": "bytes[]"
			},
			{
				"name": "",
				"type": "bytes[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qnum",
				"type": "string"
			}
		],
		"name": "getWinner",
		"outputs": [
			{
				"name": "pname",
				"type": "string"
			},
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "money",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "winnerId",
				"type": "string"
			},
			{
				"name": "winnerMoney",
				"type": "string"
			}
		],
		"name": "setWinner",
		"outputs": [
			{
				"name": "winnerLength",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "s",
				"type": "string"
			}
		],
		"name": "string_tobytes",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getWinnerLength",
		"outputs": [
			{
				"name": "winnerLength",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winner",
		"outputs": [
			{
				"name": "productName",
				"type": "bytes"
			},
			{
				"name": "winnerId",
				"type": "bytes"
			},
			{
				"name": "winnerMoney",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winnerLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]).at('0x63115bd04aa042354ffc2c4a23b72b6798b161b4');

console.log('contract:' + vc);
*/
