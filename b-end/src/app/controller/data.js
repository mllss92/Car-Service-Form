const errorHandler = require('../helper/error-handler');
const data = require('./../../data/data');
const sendMail = require('./../helper/nodemailer');
const messageBuilder = require('./../helper/message-builder');


const getData = async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res);
  }
}

const send = (req, res) => {
  sendMail(messageBuilder(req.params.email, req.body), res);
}


module.exports = {
  getData,
  send
}

// mailer.for.my.test.project