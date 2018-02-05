const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
var port = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//ROUTING

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/josip', function (req, res) {
    res.render('pages/josip');
});

app.get('/jonatan', function (req, res) {
    res.render('pages/jonatan');
});

app.get('/goga', function (req, res) {
    res.render('pages/goga');
});

app.get('/origin-cv', function(req,res){
    res.render('pages/cv-landing')
})

app.get('*', function (req, res) {
    res.render('pages/404');
});

//Email form

app.post('/send', function (req, res) {
    const output = `
    <p>You have a new contact request </p>
    <h3>Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message </h3>
    <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.NODEMAILER_MAIL, // generated ethereal user
            pass: process.env.NODEMAILER_PASS // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer contact" <mgojev00@fesb.hr>', // sender address
        to: 'gojevic.mario@gmail.com', // list of receivers
        subject: 'Node contact request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('pages/success');
    });
});
app.listen(process.env.PORT || 8888);
console.log('8888 is the magic port');