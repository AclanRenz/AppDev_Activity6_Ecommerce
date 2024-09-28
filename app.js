// Import required modules
const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/router');

// Set the port (default to 3000)
const port = process.env.PORT || 3000;

// Set view engine (EJS in this example)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Folder for EJS views

// Set up static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Use the router for different routes
app.use('/', router);

// 404 error handling (if a route is not found)
app.use((req, res, next) => {
    res.status(404).render('404'); // You can create a 404.ejs page for this
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
