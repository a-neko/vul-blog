const pool = require('../models/accessDB');
const passport = require("passport");

function signup(req, res, next) {
  const insert_sql = `insert into user (name,password) values ('${req.body.name}','${req.body.password}')`;
  const select_sql = `select * from user where name='${req.body.name}'`;
  pool.query(select_sql).then((data) => {
    if (data[0][0] != null) {
      res.send("既にそのユーザ名は使用されています");
    } else {
      pool.query(insert_sql).then(() => console.log('insert userdata'));
      res.redirect('/blogs');
    }

  });

}

module.exports = signup;
