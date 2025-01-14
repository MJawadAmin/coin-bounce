const express = require("express");
const dbConnect = require("./database/db");
const { PORT } = require("./config/index");

const app = express();

// Connect to the database
dbConnect();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get("/", (req, res) => res.json({ msg: "Hello Server" }));

// Use the port from config or default to 8080
const serverPort = PORT || 8080;

// Start the server
app.listen(serverPort, () => {
  console.log(`Backend is running on PORT ${serverPort}`);
});
