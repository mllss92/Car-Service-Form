const errorHandler = require('../helper/error-handler');

const getData = async (req, res) => {
  try {

  } catch (error) {
    errorHandler(error, res)
  }
}


module.exports = {
  getData
}