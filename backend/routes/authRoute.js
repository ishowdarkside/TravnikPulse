const express = require('express');
const path = require('path');
const router = express.Router();
const { login, refresh } = require(path.join(__dirname, '..', 'controllers', 'authController'));

router.post('/login', login);
router.post('/refresh', refresh);

module.exports = router;