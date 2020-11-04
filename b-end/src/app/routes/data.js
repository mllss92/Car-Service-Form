const route = require('express').Router();

const controller = require('./../controller/data');

module.exports = () => {

  route.get('/get', controller.getData);
  route.post('/send:email', controller.send);

  return route
}