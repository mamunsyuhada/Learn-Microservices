require('dotenv').config();

const {
  DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT
} = process.env;
module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "port": DB_PORT,
    "dialect": "mysql",
    logging: false
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "port": DB_PORT,
    "dialect": "mysql",
    logging: false
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "port": DB_PORT,
    "dialect": "mysql",
    logging: false
  }
}
