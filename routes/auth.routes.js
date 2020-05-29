const express = require('express');
const router = express.Router();

const loginController = require('../controllers/auth/login.controller');

router.get('/login', loginController.getLogin);

module.exports = router;