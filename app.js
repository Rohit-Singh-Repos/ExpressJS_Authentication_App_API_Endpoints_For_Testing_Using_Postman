// Importing Packages
require('dotenv').config()
const express = require("express");
const cors = require("cors");
const connectToDB = require('./config/connection');
const router = require('./routes/routes');

// Creating Configs
const app = express();
const PORT = process.env.SERVER_PORT

// CORS Issue
app.use(cors())

// Database Connection
connectToDB()

// Middlwares
app.use(express.json()) // For sending JSON responses to postman while testing api

// Creating Routes 
app.use("/api/user",router)

app.listen(PORT,() => {
    console.log(`Server started at http://localhost:${PORT}`)
})
