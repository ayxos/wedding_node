var config = {};

config.account = {
	service: 'gmail',
	user: 'client@clientdomain.com',
	pass: 'clientpass'
};

config.mail = {
	from: 'Wedding Jane&Doe ✔ <weddingjanedoe@gmail.com>',
	subject: '¡Hi! ✔',
	mailHtml: function(req){
		return '<div><strong>Hi, you got a new message from: <br>' + req.body.name + ' (' + req.body.mail + ')</strong></div>' + '<br>' + req.body.subject + '<br><p>' + req.body.text + '</p>';  
	}
};

config.report = {
	mail: 'reportmail@domain.com',
	mailHtml: function(req){
		return '<div><strong>Hi, someone has been trying to access using: <br>' + req.body.code + ' (' + req.body.ip + ')</strong> With the pass: <strong>' + req.body.code + '</strong></div>';
	}
};

config.domain = 'janeDoe';

config.accessCode = 'myAccessCode';

config.port = 7989;

module.exports = config;