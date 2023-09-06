const express = require('express');
const router = express.Router();

const couponController = require('./../controllers/couponController');

router
.route('/')
.post(couponController.applyCoupon);

module.exports = router;
