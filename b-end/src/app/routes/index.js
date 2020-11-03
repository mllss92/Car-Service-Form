const Router = require('express').Router;

const controller = require('../controller/data');

module.exports = () => {
  const routing = Router();

  routing.use('/get-data', controller.getData);

  return routing
}