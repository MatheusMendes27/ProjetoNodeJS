//arquivo para criação de conexão com banco


const sequelize = require('sequelize')//pegando sequelize


//criando conexão com o banco
const connect = new sequelize('node','root', '1234',{   
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
})



//exportando as duas const
var db = {};
db.sequelize = sequelize;
db.connect = connect;

module.exports = db;