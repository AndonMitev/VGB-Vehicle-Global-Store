const router = require('express').Router();
const mongoose = require('mongoose');
const Car = mongoose.model('Car');
const User = mongoose.model('User');
const makeAuth = require('../../middleware/check-auth');
const propsValidator = require('../../utils/carValidation');
const commonPropsValidator = require('../../utils/commonPropsValidation');
const errorHandler = require('../../utils/errorHandler');
const fixInput = require('../../utils/fixInput');

const addNewCar = async (req, res) => {
  const failedProps = propsValidator(req.body);
  const createdBy = mongoose.Types.ObjectId(req.user._id);

  if (failedProps) {
    return res
      .status(422)
      .json({ failedProps });
  }

  const failedCommonProps = commonPropsValidator(req.body);

  if (failedCommonProps) {
    return res
      .status(422)
      .json({ failedCommonProps });
  }

  const fixedData = Object.assign({}, fixInput(req.body), {
    createdBy
  });

  try {
    const createdCar = await Car.create(fixedData);
    return res
      .status(201)
      .json({ createdCar });
  } catch (error) {
    errorHandler(error, res);
  }
}

const getAllCars = async (req, res) => {
  try {
    const allCars = await Car
      .find()
      .sort('-createdAt');

    return res
      .status(200)
      .json({ allCars });
  } catch (error) {
    return res
      .status(404)
      .json({ error });
  }
}

const deleteCar = async (req, res) => {
  const carId = req.params.id;
  const userId = req.user._id;

  try {
    const car = await Car
      .findById(carId)
      .populate('createdBy');
    console.log(car.createdBy_id.toString());
    console.log(userId);
    console.log(car.createdBy_id.toString() === userId)
    if (car.createdBy.toString() === userId) {
      await Car.findByIdAndRemove(car._id);

      return res
        .status(200)
        .json({ success: 'Car was deleted successfull!' })
    } else {
      return res
        .status(403)
        .json({ message: 'Not allowed' });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ error });
  }
}

const getDetails = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car
      .findById(carId)
      .populate('createdBy');

    return res
      .status(200)
      .json({ car });
  } catch (error) {
    return res
      .status(403)
      .json({ error });
  }
}

router
  .get('/all', getAllCars)
  .post('/add', makeAuth, addNewCar)
  .delete('/delete/:id', makeAuth, deleteCar)
  .get('/details/:id', makeAuth, getDetails)

module.exports = router;