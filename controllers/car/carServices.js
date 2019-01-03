const router = require('express').Router();
const mongoose = require('mongoose');
const Car = mongoose.model('Car');
const makeAuth = require('../../middleware/check-auth');
const propsValidator = require('../../utils/carValidation');
const commonPropsValidator = require('../../utils/commonPropsValidation');
const errorHandler = require('../../utils/errorHandler');
const fixInput = require('../../utils/fixInput');
const constants = require('./constants');
const statusCode = require('../statusCodes');

const addNewCar = async (req, res) => {
  const failedProps = propsValidator(req.body);
  const createdBy = mongoose.Types.ObjectId(req.user._id);

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

  const fixedData = Object.assign({}, fixInput(req.body), {
    createdBy
  });

  try {
    const createdCar = await Car.create(fixedData);
    return res
      .status(statusCode.created)
      .json({ createdCar });
  } catch (error) {
    errorHandler(error, res);
  }
}

const getAllCars = async (req, res) => {
  try {
    const allCars = await Car
      .find()
      .sort(constants.createdAtDescending);

    return res
      .status(statusCode.ok)
      .json({ allCars });
  } catch (error) {
    return res
      .status(statusCode.notFound)
      .json({
        error,
        message: constants.carNotFound
      });
  }
}

const deleteCar = async (req, res) => {
  const carId = req.params.id;
  const userId = req.user._id;

  try {
    const car = await Car
      .findById(carId)
      .populate(constants.createdBy);

    if (car.createdBy._id.toString() === userId) {
      await Car.findByIdAndRemove(car._id);

      return res
        .status(statusCode.ok)
        .json({ success: constants.successDeleted });
    } else {
      return res
        .status(statusCode.forbiden)
        .json({ message: constants.notCarCreator });
    }
  } catch (error) {
    return res
      .status(statusCode.notFound)
      .json({
        error,
        message: constants.carNotFound
      });
  }
}

const getDetails = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car
      .findById(carId)
      .populate(constants.createdBy);

    const { brand } = car;

    const relatedCars = await Car
      .find({ brand });

    return res
      .status(statusCode.ok)
      .json({
        car,
        relatedCars,
      });
  } catch (error) {
    return res
      .status(statusCode.notFound)
      .json({
        error,
        message: constants.carNotFound
      });
  }
}

router
  .get(constants.all, getAllCars)
  .post(constants.add, makeAuth, addNewCar)
  .delete(constants.delete, makeAuth, deleteCar)
  .get(constants.details, getDetails)

module.exports = router;