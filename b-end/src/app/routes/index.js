const Router = require('express').Router;

const data = require('../controller/data');

module.exports = () => {
  const routing = Router();

  routing.use('/get-data', data.getData);

  return routing
}