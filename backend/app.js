const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

module.exports = app;
