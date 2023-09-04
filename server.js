const express = require ('express') ;
const app = express () ;
const port = 8084 ;
const morgan = require ('morgan') ;
const path = require ('path') ;
const bodyParser = require ('body-parser') ;

app.set('view engine' , 'ejs' ) ;


app.set('views', __dirname + '/views' ) ;

app.use(express.static(__dirname + "/public")) ;

app.get('/', (req, res) => {
  res.render('index', { message: 'hola mundo soy un get'});
});

app.post('/', (req, res) => {
  res.render('index', { message: 'y yo un post'});
});


app.listen(port,()=>{
    console.log('servidor escuchando en http://localhost:')
})