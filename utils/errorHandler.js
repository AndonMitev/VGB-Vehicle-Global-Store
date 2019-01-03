const statusCode = require('../controllers/statusCodes');

module.exports = (err, res) => {
  for (const prop in err.errors) {
    return res.status(statusCode.badRequest)
      .json({
        error: err.errors[prop].message
      });
  }
}