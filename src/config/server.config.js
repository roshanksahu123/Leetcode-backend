const dotenv = require('dotenv');
dotenv.config();// reads the env file

module.exports = {
    PORT: process.env.PORT || 3000
};