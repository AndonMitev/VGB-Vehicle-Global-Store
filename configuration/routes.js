const router = require('express').Router();
const userServices = require('../controllers/user/userServices');
router.use('/user', userServices);
module.exports = router;
