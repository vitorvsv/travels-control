const express = require('express');

const router = express.Router();

const userController = require('../controllers/user/user.controller');

router.get('/users', userController.getIndex);

module.exports = router;