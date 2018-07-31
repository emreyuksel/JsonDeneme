var express = require('express');
var app = express();
var fs = require('fs');

app.get('/list',function(req,res){
	fs.readFile('kullanici.json','utf8',function(err,data){
		console.log(data);
		res.end(data);
	});

});

var server = app.listen(8000, function() {
	console.log('sunucu calisti');
	});
