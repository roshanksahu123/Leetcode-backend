const express = require('express');

const v1Router = require('./v1');

const apiRouter = express.Router();

//Here it will got to v1/index.js
// If any request comes and route continues with /v1, we map it to v1Router
apiRouter.use('/v1', v1Router);

module.exports = apiRouter;