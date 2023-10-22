const pool = require("../../config/dbConfig");
module.exports = {
    
    register: (data, callback)=>{
        pool.query(`INSERT INTO registration(user_name, user_email,user_password)VALUES(?,?,?)`, 
        [
            data.userName,
            data.email,
            data.password
        ],
        (err, result)=>{
            if(err) return callback(err);
            return callback(null, result);
        });
    }
}
