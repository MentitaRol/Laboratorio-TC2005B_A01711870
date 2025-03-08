const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'TC2005B',
    password: '',
});

module.exports = pool.promise();