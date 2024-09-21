const pool = require('./accessDB');

function getAllUserData(req, res, next) {
  const sql = `select * from user;`
  pool.query(sql).then((data) => data[0]).then((user) => {
    res.render('admin', {users: user});
  });

}

module.exports = getAllUserData;

