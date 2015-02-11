var mongoose      = require('mongoose'),
    pmx           = require('pmx'),
    config        = require('./../config'),
    nodemailer    = require('nodemailer');

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/angular-todo');

// Definición de modelos
var Todo = mongoose.model('Todo', {
  text: String
});

// metodos extra
var sendMail = function(dest, msg, callback){
  var result = false;
  // nodemailer settings
  var transporter = nodemailer.createTransport({
    service: config.account.service,
    auth: {
      user: config.account.user,
      pass: config.account.pass
    }
  });

  // send
  transporter.sendMail({
    from: config.mail.from, // sender address
    to: dest, // list of receivers
    subject: config.mail.subject, // Subject line
    // text: 'Hello world ✔', // plaintext body
    html: msg // html body
  }, function(err, arg){
    if(err){
      console.log('Error', err);
    }
    else{
      result = true;
      console.log('true');
    }

    callback();
    return result;

  });
};

exports.getDomain = function(req, res){
  res.send(config.domain);
};

// methods
exports.getInit = function(req, res) {        // GET de todos los TODOs
  res.render('lockPage', { 
    domain: config.domain
  });
};

exports.setPassword = function(req, res) {     // GET de todos los TODOs
  // check pass
  var code = (req.body.code).trim();
  var isValid = (code == config.accessCode);

  // emit event to analitycs
  pmx.emit('code', {
    pass : code,
    ip : req.body.ip,
    valid : isValid
  });

  if(isValid){
    console.log('valid code');
    res.render('weddingPage', { 
        domain: config.domain
    });
  } else {
    console.log('wrong code', req.body.code);
    var reportMail = config.report.mailHtml(req);
    if(sendMail(config.report.mail, reportMail)){
      console.log('send report to', config.report.mail);
    }
    res.render('lockPage', { 
        domain: config.domain
    });
  }    // Angular Manejará el Frontend
};

exports.getTodos = function(req, res) {        // GET de todos los TODOs
  Todo.find(function(err, todos) {
    if(err) {
      res.send(err);
    }
    res.json(todos);
  });
};

exports.postTodos = function(req, res) {       // POST que crea un TODO y devuelve todos tras la creación
  Todo.create({
    text: req.body.text,
    done: false
  }, function(err, todo){
    if(err) {
      res.send(err);
    }

    Todo.find(function(err, todos) {
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
  });
};

exports.deleteTodos = function(req, res) {    // DELETE un TODO específico y devuelve todos tras borrarlo.
  Todo.remove({
    _id: req.params.todo
  }, function(err, todo) {
    if(err){
      res.send(err);
    }

    Todo.find(function(err, todos) {
      if(err){
        res.send(err);
      }
      res.json(todos);
    });

  })
};

exports.sendMail = function(req, res) {
  var formalMail = config.mail.mailHtml(req);
  sendMail(config.account.user, formalMail, function(){
    res.sendStatus(200);
  });
    
};