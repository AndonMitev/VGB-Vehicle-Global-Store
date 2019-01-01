const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const config = require('../../configuration/config');

const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.send(JSON.stringify(newUser));
  } catch (err) {
    return res.send(JSON.stringify(err))
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid data' });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        const token = jwt.sign({ user }, config.development.secret,
          {
            expiresIn: 10080
          })

        res.send(JSON.stringify({
          success: true,
          statusCode: 200,
          token
        }));
      }
    });
  } catch (error) {
    console.log(error);
  }
}

router
  .post('/register', registerUser)
  .post('/login', loginUser)

module.exports = router;