const express = require('express');

const problemRouter = require('./problems.routes');

const v1Router = express.Router();

//here it will go to problem.routes.js
// If any request comes and route continues with /problems, we map it to problemRouter
v1Router.use('/problems', problemRouter);

module.exports = v1Router;