const mysql = require('mysql2/promise')
require('dotenv').config()

module.exports =  pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : process.env.DB_PASSWORD,
    database : `mysql_todo_list`,
    connectionLimit : 10

})
