//   MySQL 로드
var mysql = require('mysql');
var connection = mysql.createPool({
    connectionLimit: 5,
    host     : '52.231.66.82',
    user     : 'esjung',
    password : 'root',
    database : 'auctionDb'    
});

connection.connect();
