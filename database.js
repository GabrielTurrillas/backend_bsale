const mysql = require('mysql2');

//require("dotenv").config()

/* let host = process.env.HOST
let user = process.env.USER
let password = process.env.PASSWORD
let database = process.env.DATABASE */

module.exports = mysql.createConnection({
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test'
})