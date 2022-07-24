var mysql = require('mysql');

async function get_something_from_db(){
    try{
        my_db_connection = null
        try{
            my_db_connection = mysql.createConnection({
                host: "host.docker.internal", // "127.0.0.1",
                user: "root",
                password: "123456",
                port:'3306',
                database: "daily",
              });
        }catch(err){
            console.error('my_db_connection error : ', err)
        }
        
        sql = 'select * from merge_keyword_list ORDER BY ID DESC LIMIT 10'

        queryResult = null
        try{
            queryResult = await new Promise((resolve, reject)=>{
                my_db_connection.query(sql, function (err, result) {
                   if (err){ reject(err) }
                   resolve(result)
                 });
           })
        }catch(err){
            console.error('query error : ', err)
        }

        console.log("Result: ", queryResult[0]);
        my_db_connection.end()
        return queryResult[0]

    }catch(err){
        console.error('con error : ', err)
    }
}

module.exports = {get_something_from_db}
