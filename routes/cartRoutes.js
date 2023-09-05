const express = require('express');
const router = express.Router();

const cartController = require('./../controllers/cartController');

router
.route('/')
.get(cartController.getCart);

module.exports = router;
