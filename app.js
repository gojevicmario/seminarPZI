var express = require('express');
var path = require('path');
var app = express();
var port= process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/josip', function(req, res) {
    res.render('pages/josip');
});

app.get('/jonatan', function(req, res) {
    res.render('pages/jonatan');
});

app.get('/goga', function(req, res) {
    res.render('pages/goga');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('*', function (req,res){
    res.render('pages/404');
});

app.listen(process.env.PORT || 8888);
console.log('8888 is the magic port');