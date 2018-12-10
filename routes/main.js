module.exports = function(app)
{
     app.get('/', function(req,res){
        res.render('index.html')
        // res.send('Hello World');
     });
     app.get('/login', function(req,res){
        /*
        var sql = 'SELECT * FROM user'; // topic의 모든 id와 title 불러오기
        conn.query(sql, function(err, topics, fields){
          if(err){
            console.log(err);
            res.status(500).send('Internal Server Error')
          }*/
            res.render('login.html');
        // });
    });
}