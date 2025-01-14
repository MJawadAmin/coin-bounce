const express = require("express");
const dbConnect = require ("./database/db");
const {PORT} = require("./config/index");
const router = require("./routes/index");
const app = express();
app.use(router);
dbConnect ();
app.get('/', (req , res)=> res.json({msg : "Hello World"}) );
app.listen(PORT, console.log(`Backend is running on port ${PORT}`));