var Express = require('express');
var app = Express();

app.get('/hello', function(req,res) {
	console.log("request to /hello");
	res.send("Hello!");
})
//to "expose" the app so that server.js can use it
module.exports = app;