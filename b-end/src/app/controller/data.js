const errorHandler = require('../helper/error-handler');
const data = require('./../../data/data');

const getData = async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res);
  }
}


module.exports = {
  getData
}