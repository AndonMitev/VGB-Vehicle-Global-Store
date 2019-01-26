const jwtKey = require('../configuration/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, jwtKey.development.secret);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({
        message: 'Auth failed'
      });
  }
}