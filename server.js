const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

// Middleware to parse json in the application. Receive json body from request
app.use(express.json());

// Middleware to add the routes
app.use('/api/contacts', require('./routes/contactRoutes'));

// Middleware to handle the error thrown by the application
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});