const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const config = require('../../configuration/config');
const clientRequestBodyValidation = require('../../utils/userValidation');
const commonPropsValidation = require('../../utils/commonPropsValidation');
const errorHandler = require('../../utils/errorHandler');
const statusCode = require('../statusCodes');
const constants = require('./constants');

const registerUser = async (req, res) => {
  try {
    const failedProps = clientRequestBodyValidation(req.body);

    if (failedProps) {
      return res
        .status(statusCode.badRequest)
        .json({ failedProps });
    }

    const failedCommonProps = commonPropsValidation(req.body);

    if (failedCommonProps) {
      return res
        .status(statusCode.badRequest)
        .json({ failedCommonProps });
    }

    const existingUsername = await User.findOne({ username: req.body.username });
    const existingEmail = await User.findOne({ email: req.body.email });
    const errorMessageForExistingUser =
      clientRequestBodyValidation(req.body, existingUsername, existingEmail);

    if (errorMessageForExistingUser) {
      return res
        .status(statusCode.badRequest)
        .json({ errorMessageForExistingUser });
    }

    const newUser = await User.create(req.body);
    const { username, email, registeredOn } = newUser;

    return res
      .status(statusCode.created)
      .json({
        username,
        email,
        registeredOn
      });
  } catch (error) {
    errorHandler(error, res);
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res
        .status(statusCode.unauthorized)
        .json({ message: constants.invalidCredentials });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        const token = jwt.sign({ user }, config.development.secret,
          {
            expiresIn: 10080
          })
        const {username, email} = user;
        const userData = {username, email};
        res.send(JSON.stringify({
          success: true,
          statusCode: statusCode.ok,
          token,
          userData
        }));
      }
    });
  } catch (error) {
    return res
      .status(statusCode.notFound);
  }
}

const userProfile = async (req, res) => {
  const profileId = req.params.id;
  try {
    const user = await User.findById(profileId);

    if (!user) {
      return res
        .status(statusCode.badRequest)
        .json(
          {
            notFound: constants.notFound,
            message: error
          }
        );
    }

    return res
      .status(statusCode.ok)
      .json(user);

  } catch (error) {
    return res
      .status(statusCode.badRequest)
      .json(
        {
          notFound: constants.notFound,
          message: error
        }
      );
  }
}

const allUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res
      .status(statusCode.ok)
      .json({ users });
  } catch (error) {
    return res
      .status(statusCode.badRequest)
      .json({
        message: 'Not allowed',
        error
      });
  }
}

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(statusCode.notFound)
        .json(constants.notFound);
    }

    await User.findByIdAndDelete(userid);

    return res
      .status(statusCode.ok)
      .json({
        message: constants.userWasDeleted
      });

  } catch (error) {
    return res
      .status(statusCode.badRequest)
      .json({
        error,
        message: constants.badRequest
      });
  }
}

router
  .post(constants.register, registerUser)
  .post(constants.login, loginUser)
  .get(constants.profile, userProfile)
  .get(constants.allUsers, allUsers)
  .delete(constants.deleteUser, deleteUser);

module.exports = router;