const express = require('express');
const router = express.Router();

const userController = require('./userController');
const postController = require('./postController');

// Define routes using controllers
router.use('/users', userController);
router.use('/posts', postController);

module.exports = router;
