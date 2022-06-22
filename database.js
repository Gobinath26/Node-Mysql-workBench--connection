var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "gobidb",
  user: "root",
  password: "root54321A",
});

module.exports = connection;