const pool = require("./accessDB");

function signup(req, res, next) {
  const insert_sql = `insert into user (name,password) values ('${req.body.name}','${req.body.password}')`;
  const select_sql = `select * from user where name='${req.body.name}'`;
  pool.query(select_sql).then((data) => {
    if (data[0][0] != null) {
      return 1;
    }
  })
}
