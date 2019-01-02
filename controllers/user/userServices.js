const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const config = require('../../configuration/config');
const clientRequestBodyValidation = require('../../utils/userValidation');
const commonPropsValidation = require('../../utils/commonPropsValidation');
const errorHandler = require('../../utils/errorHandler');

const registerUser = async (req, res) => {
  try {
    const failedProps = clientRequestBodyValidation(req.body)
    if (failedProps) {
      return res
        .status(422)
        .json({ failedProps })
    }
    const failedCommonProps = commonPropsValidation(req.body);
    if (failedCommonProps) {
      return res
        .status(422)
        .json({ failedCommonProps })
    }
    const existingUsername = await User.findOne({ username: req.body.username });
    const existingEmail = await User.findOne({ email: req.body.email });
    const errorMessageForExistingUser =
      clientRequestBodyValidation(req.body, existingUsername, existingEmail);
    if (errorMessageForExistingUser) {
      return res
        .status(422)
        .json({ errorMessageForExistingUser })
    }
    const newUser = await User.create(req.body);
    return res.send(JSON.stringify(newUser));
  } catch (error) {
    errorHandler(error, res);
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