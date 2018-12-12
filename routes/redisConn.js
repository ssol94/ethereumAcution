
var _redis = require("redis");

var redis = _redis.createClient('6379', '52.231.66.82');

exports.redis_getValue = function(key) {
	redis.get(key, function(error, result) {
	    if (error) console.log('Error: '+ error);
	    else  { 
	    	console.log('value: ' + result);
	    	return result;
	    }
	});
}

exports.redis_setValue = function(key) {
	redis.set(key, value, function(error, result) {
	    if (error) console.log('Error: '+ error);
	    else console.log('value: ' + result);
	});
}