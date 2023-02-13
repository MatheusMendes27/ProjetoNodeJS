
const express = require('express') //pegando o framework express
const app = express() //jogando tudo no app
const handlebars = require('express-handlebars')//pegando handlebars

const banco = require('./models/post') //pegando o modulo post do arquivo do banco


//configurando template handlebars 
app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')


//bodyparser
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//criando rotas
app.post('/',function(req,res){
    res.render('form')
})

app.get('/',function(req,res){
    res.render('form')
})

//página de posts
app.get('/posts',function(req,res){

    //função para pegar os posts e mostrá-los do mais recente ao mais antigo
    banco.findAll({order: [['id','DESC']]}).then(function(posts){  
    res.render('posts', {posts: posts})
    })
   
})

//rota para cadastrar o que foi escrito no banco
app.post('/cadastrado',function(req,res){ 
    //pegando as informações dos campos de jogando na tabela
    banco.create({
    titulo:req.body.titulo,
    conteudo: req.body.conteudo 
    })
    res.render('enviado')
})
//rota para apagar o conteudo selecionado
app.get('/deletar:id',function(req,res){
   banco.destroy({where:{'id': req.params.id}}).then(function(){
    res.render('deletar')
   }).catch(function(erro){
    res.send('erro'+erro)
   })
   
})




app.listen(8081)