const express = require('express');

const router = express.Router();

const userController = require('../controllers/user/user.controller');

router.get('/users', userController.getIndex);
router.get('/users/create', userController.getCreate);
router.post('/users/create', userController.postCreate);
router.get('/users/:id/edit', userController.getEdit);
router.post('/users/:id/edit', userController.postEdit);

module.exports = router;