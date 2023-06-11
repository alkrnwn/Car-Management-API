require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT, DB_URL } =
  process.env;

module.exports = {
  development: {
    username: "root",
    password: "",
    database: "challenge5",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    url: DB_URL,
    // dialect: DB_DIALECT,
    // username: DB_USERNAME,
    // password: DB_PASSWORD,
    // host: DB_HOST,
  },
};
