require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const refreshTonkensRouter = require('./routes/refreshTokens');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/refresh_tokens', refreshTonkensRouter);

console.log('------INFO------ Service User');

module.exports = app;


