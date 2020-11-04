const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'mailer.for.my.test.project@gmail.com',
    pass: '123qweER'
  }
},
  {
    from: 'Lesson-17 <mailer.for.my.test.project@gmail.com>'
  });

const sendMail = (message, res) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).json('Sending the mail was faild!');
    } else {
      console.log('New message:', info);
      res.status(200).json('Mail was sent successfully!');
    }
  })
}

module.exports = sendMail;