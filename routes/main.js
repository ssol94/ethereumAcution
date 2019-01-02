
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
    res.render('index.ejs')
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
    res.render('allList.ejs', {result: 'sr'})
  });
  app.post('/login_confirm_h', function(req,res) {
    redis.hget(req.body.id, 'password', 'grade', function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });
  app.post('/login_confirm_all', function(req,res) {
    redis.hgetall(req.body.id, function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });
  app.post('/get_qnum', function(req,res) {
    redis.get('qnum', function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });
  app.post('/set_qnum', function(req,res) {
    redis.set('qnum', req.body.qnum, function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });

  app.post('/get_userMoney', function(req,res) {
    redis.hget(req.body.id, 'money', function(error, result) {
      if (error) console.log('Error: '+ error);
      else { res.json(result);
        console.log('result :', result)
      }
    });
  });
  app.post('/set_userMoney', function(req,res) {
    redis.hset(req.body.id, 'money', req.body.money, function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });
  app.post('/set_totalMoney', function(req,res) {
    redis.get('totalMoney', function(error, result) {
      if (error) console.log('Error: '+ error);
      else  {
        console.log(result)
        if (Number(result) < Number(req.body.money)) {
          redis.set('totalMoney', Number(req.body.money) + Number(result), function(error, setResult) {
            if (error) console.log('Error: '+ error);
            else  res.json(setResult);
          });
        } 
      }
    });
  });
  app.post('/init_totalMoney', function(req, res) {
    redis.set('totalMoney', 0, function(error, setResult) {
          if (error) console.log('Error: '+ error);
          else  res.json(setResult);
        });
  })
  app.post('/get_totalMoney', function(req,res) {
    redis.get('totalMoney', function(error, result) {
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

  app.post('/user_send', function(req,res) {
    // req.body.id
    console.dir(req.body)
    redis.get('state', function(error, result) {
      if (result == 'start') {
        redis.get('qnum', function(error, qnumResult) {
          if (error) console.log('Error: '+ error);
          else {
            console.log('qnum : ', qnumResult)
            console.log('qnum : ' + qnumResult + ', money : ' + req.body.money + ', id : ' + req.body.id)
            redis.zadd('q'+qnumResult, req.body.money, req.body.id, function(error, addResult) {
              if (error) console.log('Error: '+ error);
              else  res.json(addResult);
            });
          } 
        });
      } else {
        console.log('no')
        res.json({'statusText': 'NO'});
      } 
    });
  });

  app.post('/state', function(req,res) {
    redis.set('state', req.body.state, function(error, result) {
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });

  app.post('/score', function(req,res) {
    redis.zadd('q' + req.body.qnum, req.body.money, req.body.id, function(error, result) {
      console.log('score : ', result)
      if (error) console.log('Error: '+ error);
      else  res.json(result);
    });
  });

  app.post('/nowList', function(req,res) {
    console.log('req.body.key : ', req.body.key)
    redis.get('qnum', function(error, qnumResult) {
          if (error) console.log('Error: '+ error);
          else {
            console.log('qnumResult : ' + qnumResult)
            redis.zrevrange('q' + qnumResult, 0, -1, 'withscores', function(error, result) {
              if (error) console.log('Error: '+ error);
              else {
                console.log('results')
                console.dir(result)
                // res.render('allList.ejs', {list: result})
                res.json(result);
                
              }
            });
          }
        });
  });
  app.post('/set_userMoneyAfterCheck', function(req,res) {
    redis.hget(req.body.id, 'money', function(error, getResult) {
      if (error) console.log('Error: '+ error);
      else {
        redis.hset(req.body.id, 'money', Number(getResult) - Number(req.body.money), function(error, result) {
          if (error) console.log('Error: '+ error);
          else  res.json(result);
        });
      }
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
