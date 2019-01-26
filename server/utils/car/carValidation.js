const mongoose = require('mongoose');
const propsValidator = require('./carValidationRules');
const commonPropsValidator = require('../commonPropsValidation');
const fixInput = require('../../utils/car/fixInput');
const statusCode = require('../../controllers/statusCodes');

module.exports = (req, res) => {
  const failedProps = propsValidator(req.body);

  if (failedProps) {
    return res
      .status(statusCode.badRequest)
      .json({ failedProps });
  }

  const failedCommonProps = commonPropsValidator(req.body);

  if (failedCommonProps) {
    return res
      .status(statusCode.badRequest)
      .json({ failedCommonProps });
  }

  const createdBy = mongoose.Types.ObjectId(req.user._id);

  return Object.assign({}, fixInput(req.body), {
    createdBy
  });
}