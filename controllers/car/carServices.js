const router = require('express').Router();
const mongoose = require('mongoose');
const Car = mongoose.model('Car');
const requireAuth = require('../../middleware/check-auth');
const errorHandler = require('../../utils/errorHandler');
const constants = require('./constants');
const statusCode = require('../statusCodes');
const carValidation = require('../../utils/car/carValidation');

const addNewCar = async (req, res) => {
  const validCarProps = carValidation(req, res);
  if (validCarProps.statusCode === 400) return;

  try {
    const createdCar = await Car.create(validCarProps);
    return res
      .status(statusCode.created)
      .json({ createdCar });
  } catch (error) {
    errorHandler(error, res);
  }
}

const editCar = async (req, res) => {
  const carId = req.params.id;
  const userId = req.user._id;
  const validCarProps = carValidation(req, res);

  if (validCarProps.statusCode === 400) return;

  try {
    const carToEdit = await Car
      .findById(carId)
      .populate(constants.createdBy);

    if (!carToEdit) {
      return res
        .status(statusCode.notFound)
        .json({
          error,
          notFound: constants.carNotFound
        });
    }

    if (carToEdit.createdBy._id.toString() === userId) {
      const newVersionOfCar = Object.assign(carToEdit, validCarProps);
      const editedCar = await newVersionOfCar.save();

      return res
        .status(statusCode.ok)
        .json({
          editedCar,
          message: constants.successEdited
        });
    }

    return res
      .status(statusCode.forbiden)
      .json({ message: constants.notCarCreator });
  } catch (error) {
    return res
      .status(statusCode.notFound)
      .json({
        error,
        notFound: constants.carNotFound
      });
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

const carsByBrand = async(req, res) => {
  const {params: { brand }} = req;

  try {
    const carsWithSameBrand = await Car.find({brand});
    return res
      .status(statusCode.ok)
      .json({
        carsWithSameBrand
      });
  } catch (error) {
    return res
      .status(statusCode.notFound)
      .json({
        message: constants.carNotFound,
        error
      });
  }
  

}

router
  .get(constants.all, getAllCars)
  .get(constants.details, getDetails)
  .post(constants.add, requireAuth, addNewCar)
  .delete(constants.delete, requireAuth, deleteCar)
  .put(constants.edit, requireAuth, editCar)
  .get(constants.carsByBrand, carsByBrand);

module.exports = router;