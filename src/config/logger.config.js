const winston = require('winston');
require('winston-mongodb');
const {LOG_DB_URL} = require("./server.config");

const allowedTransports = [];//Transports means where to show the logs
//Console indicates console based logins, and their format we have added to the argument of Console() method
// this formatting overrides the default formatting
//logging on console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //Second Argument for combine method defines what should exactly be printed in the logs
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

//logging in mongoDB
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}));

//logging in file
allowedTransports.push(new winston.transports.File({
    filename: `${__dirname}/logs/app.log`,
    level: 'error',
}));

const logger = winston.createLogger({
    //default formatting
    format: winston.format.combine(
        //First Argument for combine method defines what should be the timestamp format
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //Second Argument for combine method defines what should exactly be printed in the logs
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    //the below attribute will say where to print the logs
    transports: allowedTransports
});

module.exports = logger;