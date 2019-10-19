const mysql = require("mysql2");

const pool = mysql.createPool({
    host: '35.247.178.19',
    user: 'teaching',
    password: 'fq#z*Rr*#3F"bm*-',
    database: 'learning',     
    waitForConnections: true,     
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) return console.error(err);
    connection.query("SELECT * FROM EMPLOYEE LIMIT 3", 
            (err, results, fields) => {
        if (err) return console.log(err);     
        console.log(results);
        console.log(fields);      
    });
});