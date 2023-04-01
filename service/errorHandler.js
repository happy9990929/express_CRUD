const errorHandler = (res, error) => {
  res.status(400).send({
    status: false,
    message: error,
  }).end();
}

module.exports = errorHandler;