const pool = require('./accessDB');

function getAllBlogs(req, res, next) {
  const sql = `select blog.eyecatch,blog.title,user.name from user,blog where blog.userId=user.id;`
  pool.query(sql).then((data) => data[0]).then((blogs) => {

    res.render('blogs/blogs', {blogs: blogs})
  });

}

module.exports = getAllBlogs;

