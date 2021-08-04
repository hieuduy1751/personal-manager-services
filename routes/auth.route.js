const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authRegexMiddleware = require('../middlewares/authRegex.middleware');

router.post('/login', authRegexMiddleware.loginRegex, authController.postLogin); 

router.post('/register', authRegexMiddleware.registerRegex, authController.postRegister);

module.exports = router;