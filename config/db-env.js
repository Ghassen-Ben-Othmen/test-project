const { DB_HOST, DB_PORT, DB_PASSWORD, DB_USERNAME } = require("./db-dev-env");

module.exports = {
  DB_HOST: process.env.DB_HOST || DB_HOST,
  DB_PORT: process.env.DB_PORT || DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME || DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD || DB_PASSWORD
};
