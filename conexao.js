const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    "user": "root",
    password:"",
    database: "produtos_api"
});

module.exports =  conexao;