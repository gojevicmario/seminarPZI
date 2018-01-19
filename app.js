var express = require('express');
var path = require('path');
var app = express();
var port= process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res) {
    res.render('pages/index');
    
});

app.get('/joseph', function(req, res) {
    res.render('pages/joseph');
});

app.get('/stef', function(req, res) {
    res.render('pages/stef');
});

app.get('/jozo', function(req, res) {
    res.render('pages/jozo');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(process.env.PORT || 8888);
console.log('8080 is the magic port');