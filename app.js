//server.js
var express        = require('express')
  , methodOverride = require('method-override')
  , logger         = require('morgan')
  , favicon        = require('static-favicon')
  , bodyParser     = require('body-parser')
  , mongoose			 = require('mongoose')
  , pmx            = require('pmx').init()
  , http 					 = require('http')
  , path           = require('path')
  , routes 			 	 = require('./routes') // Para las funciones con la DB
  , config         = require('./config')
  , port 					 = config.port
  , app            = express();

app.set('port', process.env.PORT || port);
// Localización de los ficheros estáticos
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());

// Pagina de Inicio: http:localhost:PORT
app.get('/', routes.getInit);

// API
app.get('/domain', routes.getDomain);
app.get('/login', routes.getInit);
app.post('/login', routes.setPassword);
app.get('/api/todos', routes.getTodos);
app.post('/api/todos', routes.postTodos);
app.delete('/api/todos/:todo', routes.deleteTodos);

// send Mail
app.post('/send', routes.sendMail);


// run server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


