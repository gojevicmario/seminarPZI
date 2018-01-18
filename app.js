var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res) {
    res.render('pages/index');
    
});

app.get('/joseph', function(req, res) {
    res.render('pages/joseph');
});

app.listen(8080);
console.log('8080 is the magic port');