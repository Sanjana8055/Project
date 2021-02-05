
require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }

});

transporter.sendMail(mailOptions);

module.exports = sendMail;

/*
, function (err, data) {
    mailOptions.to
    if (err) {
        console.log('Error Occurs', err);
    }
    else {
        console.log("Mail sent!!")
    }}*/
    /*host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,*/

    /*let mailOptions = {
    from: 'manasachepuri2000@gmail.com',
    to: '',
    subject: "Test",
    text: 'hiii'
};*/