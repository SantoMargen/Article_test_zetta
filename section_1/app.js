"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000
require("./config/config_mongo");
const routes = require('./routes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

