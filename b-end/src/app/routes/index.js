const Router = require('express').Router;

const data = require('./data');

module.exports = () => {
  const routing = Router();

  routing.use('/data', data());


  return routing
}