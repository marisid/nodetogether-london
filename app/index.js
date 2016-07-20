var Express = require('express');
var app = Express();
var PickOne = require('pick-one');
var Messages =  ['hi','world','universe','galaxy'];

app.get('/hello', function(req,res) {
	console.log("request to /hello");
	res.send(pickOne(Messages));
});

/*app.get('*', function(req,res) {
	console.log("request to /hello");
	res.send("Hello!");
});*/

//to "expose" the app so that server.js can use it
module.exports = app;