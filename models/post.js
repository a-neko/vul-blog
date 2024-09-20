const pool = require('./accessDB');

function postBlog(req, res, next,userId) {


  const user=req.body;
  const sql=`insert into blog (userId,title,content,eyecatch,createdAt) values (${userId},'${user.title}','${user.content}',${user.eyecatch},cast(now() as datetime))`
  pool.query(sql).then(()=>console.log('created new blog!'))
}

module.exports = postBlog;
