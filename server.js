// for an npm package to work we need to save it in a variable

var port = "8000";
var host = "0.0.0.0";
var Express = require('express');
var rules = require('./app/index.js')

var app = Express();

app.use(rules);

app.listen(port,host);

//console.log("Yay it worked!");
console.log('Server running %s:%d...', host,port)
