
module.exports = function(app)
{
  var _redis = require("redis");
  var redis = _redis.createClient('6379', '52.231.66.82');

  // var redisConn = require('./redisConn.js');
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

// app get
  app.get('/', function(req,res){
    res.render('index.html')
  });
  app.get('/login', function(req,res){
    res.render('login.ejs', {user: 'sol'});
  });
  app.get('/user', function(req,res){
    res.render('user.ejs')
  });
  app.get('/list', function(req,res){
    res.render('list.ejs')
  });
  app.get('/listAll', function(req,res){
    res.render('allList.ejs')
  });
  app.post('/login_confirm_h', function(req,res) {
    // req.body.id
    console.dir(req.body.id)
    redis.hget(req.body.id, 'password', 'grade', function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });
  app.post('/login_confirm_all', function(req,res) {
    // req.body.id
    console.dir(req.body.id)
    redis.hgetall(req.body.id, function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });

  // app post
  app.post('/login_confirm', function(req,res) {
    console.dir(req.body.id)
    redis.get(req.body.id, function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });
  return app;
}
/*
//redis
  redisConn.redis_getValue(req.body.id, function (err, data) {
    console.loda('data : ', data)
    res.json(data)
    // return data;
  })
*/
/*
//sql
console.log('req.body : ', req)
      var sql = `SELECT * FROM user`;
        connection.query(sql, function(err, result){
          if(err){
            console.log(err);
          }else{
            console.log(result[0]);
          }
      })
      res.send("welcome! " + req.body.email)
*/
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