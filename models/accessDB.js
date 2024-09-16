const mysql = require("mysql2/promise");
require('dotenv').config();
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 3, // 接続を張り続けるコネクション数を指定
  namedPlaceholders: true, // 設定必須
});
module.exports=pool;
