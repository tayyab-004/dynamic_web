const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

module.exports = {
  PORT,
  DB_CONNECTION_STRING,
};
