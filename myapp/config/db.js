const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',    // ou o IP do seu servidor MySQL
    user: 'root',         // o usuário do MySQL
    database: 'mydatabase'// o nome do banco de dados
});

module.exports = pool.promise();
