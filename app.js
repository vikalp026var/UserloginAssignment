const express = require('express');
const connectToDb = require('./Config/db');
const cors = require('cors');
require('dotenv').config();

connectToDb();
const app = express();
app.use(express.json());
app.use(cors());
const userRotes=require('./routes/UserRoutes');
app.use('/',userRotes);


module.exports = app;
