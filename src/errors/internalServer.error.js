const { StatusCodes } = require('http-status-codes');
const BaseError = require('./base.error');

class InternalServerError extends BaseError {
    constructor(details) {
        super('InternelServerError',StatusCodes.INTERNAL_SERVER_ERROR,`Something Went Wrong !!`,details);
    }
}

module.exports = InternalServerError;