const router = require('express').Router();
const userServices = require('../controllers/user/userServices');
const carServices = require('../controllers/car/carServices');
router.use('/user', userServices);
router.use('/car', carServices);
module.exports = router;
