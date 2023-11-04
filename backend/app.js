const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const authRouter = require('./routes/authRoute')
const cors = require('cors');
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/auth', authRouter)

module.exports = app;
