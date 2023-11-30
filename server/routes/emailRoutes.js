const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/emailController');

// Define the route
router.post('/send-email', sendEmail);

// Export the router
module.exports = router;
