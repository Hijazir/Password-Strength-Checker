const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// POST /api/password/check
router.post('/check', passwordController.checkStrength);

// POST /api/password/generate
router.post('/generate', passwordController.generatePassword);

module.exports = router;
