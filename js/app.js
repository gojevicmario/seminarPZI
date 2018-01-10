var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../ejs','index.html'));
});

app.listen(3000);
console.log('listening to port 3000');