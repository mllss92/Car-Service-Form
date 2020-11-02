const errorHandler = (err, res, status) => {
  return res.status(status ? status : 500).json(err);
}