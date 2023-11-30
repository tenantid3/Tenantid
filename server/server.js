// server.js or index.js
const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes'); // Adjust the path as needed

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', emailRoutes); // Assuming your route is prefixed with '/api'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
