const express = require('express');

const router = express.Router();

const userController = require('../controllers/user/user.controller');

router.get('/users', userController.getIndex);
router.get('/users/create', userController.getCreate);
router.post('/users/create', userController.postCreate);

module.exports = router;