# Wedding template page

An HTML5 responsive design using jquery waypoints &amp; scroll-to for a pleasant single-page navigation. This template makes use of media queries and scales well for all mobile form-factors. Built with Node.js &amp; bootstrap3

 Features:
 - Contact site (sending email using nodemailer)
 - Block page to prevent uncounfortable visitors
 - Responsive (using media queries)
 - just config initial values

# Config file
In order to run the system you just need to set some minor values inside config.js file

````
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
`````


# Lock screen
The system provides a code to enter, in order to avoid uncomfortable visitors, keeping it private
![ScreenShot](http://i57.tinypic.com/2ebu105.png)

# Main page with Floating navbar
To acces to every single section with just one click
![ScreenShot](http://i61.tinypic.com/24ndye1.png)

# Relationship timeline
Tell your love history to whoever you want
![ScreenShot](http://i60.tinypic.com/zx1995.png)

# Image & video Gallery
Share your media with your people
![ScreenShot](http://i62.tinypic.com/9a1i6f.png)

# Responsive!
Use your mobile and enjoy!

<img src="http://i59.tinypic.com/aau1p3.png" alt="Lock page" width="48%" height="auto"/>
<img src="http://i57.tinypic.com/13yfbea.png" alt="Lock page" width="48%" height="auto"/>


