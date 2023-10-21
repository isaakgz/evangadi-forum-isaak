const mysql = require("mysql2")


//Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    user: process.env.USER,
    database: process.env.DATABASE,
    host: process.env.HOST,
    password:process.env.PASSWORD,
    connectionLimit:10,
  });

  pool.getConnection(function(err, connection){
    console.log("database connected")

  });

  