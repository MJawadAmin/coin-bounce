const express = require("express");
const dbConnect = require("./database/db");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandling"); // Corrected the folder name
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database
dbConnect();

// Use the routes
app.use(router);

// Error handling middleware (should be after routes)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Backend is running on port : ${PORT}`));
