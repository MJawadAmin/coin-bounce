const express = require("express");
const dbConnect = require ("./database/db");
const app = express();
const PORT = 8000;
dbConnect ();
app.get('/', (req , res)=> res.json({msg : "Hello World"}) );
app.listen(PORT, console.log(`Backend is running on port ${PORT}`));