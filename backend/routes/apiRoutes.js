const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');

// POST request aayegi /api/contact par
router.post('/contact', sendContactEmail);

module.exports = router;