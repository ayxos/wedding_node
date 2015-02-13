An HTML5 responsive design using jquery waypoints &amp; scroll-to for a pleasant single-page navigation. This template makes use of media queries and scales well for all mobile form-factors. Built with Node.js &amp; bootstrap3

project: http://ayxos.com/creating-a-wedding-template-with-node-js/

Features:

* Contact site (sending email using nodemailer)
* Block page to prevent uncomfortable visitors
* Responsive (using media queries)
* Just config one single file!!!!

Technologies:

* **Node.js** - cross-platform runtime environment for server-side
* **Nodemailer** - module to send e-mails with NodeJS
* **pm2**     - production process manager for NodeJS applications
* **Grunt**   - The JavaScript Task Runner
* **Bower**   - Dependency manager
* **Jade**    - Template engine
* **jquery**  - JavaScript Library
* **Mongo**   - NoSQL databse
* **Keymetrics** - Realtime monitoring and Application management for NodeJS

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
````
config.accessCode = 'myAccessCode';
```
{<1>}![ScreenShot](http://i57.tinypic.com/2ebu105.png)

# Notification Mail service
unique endpoint to send mails directly to a specific addres.
````
config.mail = {
	from: 'Wedding Jane&Doe ✔ <weddingjanedoe@gmail.com>',
	subject: '¡Hi! ✔',
	mailHtml: function(req){
		return '<div><strong>Hi, you got a new message from: <br>' + req.body.name + ' (' + req.body.mail + ')</strong></div>' + '<br>' + req.body.subject + '<br><p>' + req.body.text + '</p>';  
	}
```
Everytime that someone wants to send a message...
<br>{<2>}![ScreenShot](http://i61.tinypic.com/15qamx1.png)
<br>...the system will inform you (wedding couple or someoneelse) through email about it.
<br>{<3>}![ScreenShot](http://i58.tinypic.com/b3sqw4.png)

# Report mail notifications
Get an email everytime that someone try to access using wrong pass.
````

config.report = {
	mail: 'reportmail@domain.com',
	mailHtml: function(req){
		return '<div><strong>Hi, someone has been trying to access using: <br>' + req.body.code + ' (' + req.body.ip + ')</strong> With the pass: <strong>' + req.body.code + '</strong></div>';
	}
};

```
So, everytime that someone will try to enter typing a wrong pass...
<br>{<4>}![ScreenShot](http://i60.tinypic.com/2uzsbc9.png)
<br>...the system will inform you (wedding couple or someoneelse) through email about it.
<br>{<5>}![ScreenShot](http://i62.tinypic.com/x211qs.png)


# Main page with Floating navbar
To acces to every single section with just one click
{<6>}![ScreenShot](http://i61.tinypic.com/28wl381.png)

# Relationship timeline
Tell your love history to whoever you want
{<7>}![ScreenShot](http://i58.tinypic.com/ka5m50.png)

# Image & video Gallery
Share your media with your people
{<8>}![ScreenShot](http://i62.tinypic.com/nfgpxs.png)

# Responsive!
Use your mobile and enjoy!

<img src="http://i59.tinypic.com/aau1p3.png" alt="Lock page" width="48%" height="auto" style="display:inline-block"/><img src="http://i57.tinypic.com/13yfbea.png" alt="Lock page" width="48%" height="auto" style="display:inline-block"/>

# Coming soon...
* Media API
* song list

# How-To
```
git clone https://github.com/cybermarkus1/wedding_node.git
```
fulfill <b>config.js<b>
```
npm install
node app.js
```

project : https://github.com/cybermarkus1/wedding_node
