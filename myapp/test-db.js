const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',    // ou o IP do seu servidor MySQL
    user: 'root',         // o usuário do MySQL
    database: 'mydatabase'// o nome do banco de dados
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados!');
        connection.release();
    }
});
