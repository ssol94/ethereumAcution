
module.exports = function(app)
{
     app.get('/', function(req,res){
        res.render('index.html')
        // DB 작업 수행
        // res.send('Hello World');
     });
     app.get('/login', function(req,res){
        var redisConn = require('./redisConn');
        console.log('result : ' + redisConn.redis_getValue('siri'))
        /*
        var sql = `SELECT * FROM user`;
        connection.query(sql, function(err, result){
          if(err){
            console.log(err);
          }else{
            console.log(result[0]);
          }*/
          res.render('login.ejs', {user: 'sol'});
        // }) 
    });
    app.get('/user', function(req,res){
      res.render('user.ejs')
    });
    app.get('/list', function(req,res){
      res.render('list.ejs')
    });
    return app;
}
/*
var mysql_dbc = require('./mysqlConn')();
var connection = mysql_dbc.init();
// mysql_dbc.test_close(connection);
mysql_dbc.test_open(connection);

module.exports = function(app)
{
     app.get('/', function(req,res){
        res.render('index.html')
        // DB 작업 수행
        var sql = `SELECT * FROM user`;
        connection.query(sql, function(err, result){
          if(err){
            console.log(err);
          }else{
            console.log(result);
          }
        })

        // res.send('Hello World');
     });
     app.get('/login', function(req,res){
        var sql = `SELECT * FROM user`;
        connection.query(sql, function(err, result){
          if(err){
            console.log(err);
          }else{
            console.log(result[0]);
          }
          res.render('login.ejs', {user: result[0]});
        })  
    });
    return app;
}
*/