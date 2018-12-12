//   MySQL 로드
var mysql = require('mysql');

module.exports = function () {
	return {
		init: function () {
			return mysql.createConnection({
				host: 'localhost',
				port: 3306,
				user: 'root',
				password: 'root',
				database: 'auctionDb'
			})
		},

		test_open: function (con) {
			con.connect(function (err) {
				if (err) {
					console.error('mysql connection error : ' + err)
				} else {
					console.info('mysql is connected successfully.')
				}
			})
		},

		test_close: function (con) {
			con.end(function (err) {
				if (err) {
					console.error('mysql connection close error : ' + err)
				} else {
					console.info('mysql is disconnected successfully.')
				}
			})
		}
	}
}
