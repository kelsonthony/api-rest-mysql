var mysql = require('mysql');

var connMySQL = function(){
        console.log('Conexão com o bd qualis foi estabelecida');
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'kyxxp2',
            database: 'qualisdb'
        });
        /**
         * 
         * //host: '92.168.150.128',
            user: 'qualis_user',
            password: 'qualis123',
            database: 'qualisdb'
         */
}

module.exports = function () {
    console.log('o autoload carregou o módulo de conexão com o banco de dados');    
    return connMySQL; 
        
    }