var pool = require("./db_pooling");

exports.search = function(cb, param){ // param = request.params
//console.log(param);
    pool.acquire(function(err, conn){
        if (err) console.log("커넥션 획득 실패 " + err);
        else
        {
            conn.query(
                "SELECT * FROM user",
                [param.id],
                function(err, result){
                    if(err) console.log(err);
                    else    console.log(result);
                    pool.release(conn);
                    cb(err, result);
                }
            );
        }   
    });
}
