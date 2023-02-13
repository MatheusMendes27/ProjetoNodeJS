//arquivo para criação de tabela


const db = require('./db')


//criação da tabela
const post = db.connect.define('post',{
    titulo:{
        type: db.sequelize.STRING
    },
    conteudo:{
        type: db.sequelize.TEXT
    }
})
//exportando a tabela
module.exports=post 


//criando a tabela
//post.sync({force:false  })