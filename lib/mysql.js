const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool({
    connectionLimit: config.database.limit,
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.database,
    port: 3306
})


module.exports = pool;