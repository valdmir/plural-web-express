var express = require('express');

var app = express();

var port = 9005;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/',function(req,res){
	res.send('hello world');
});
app.get('/books',function(req,res){
	res.send('hello books');
})
app.listen(port,function(err){
	console.log("app server running on port 9005");
});
