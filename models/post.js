const pool = require('./accessDB');
const path=require('path');
const fs = require('fs');
function postBlog(req, res, next) {
  const userId = req.user[0].id;
  const user = req.body;
  const path1 = req.files.eyecatch.path; // アップロードされたファイルのフルパス名
  const name = req.files.eyecatch.name;


  if (path1) {
    const dest = path.dirname(path1).replace(/\\/g, "/") + "/" + name;
    fs.renameSync(path1, dest);  // 一時ファイル名を元のファイル名に変更する。
    console.log(`${name}は${path1}に移動しました`)
  }
  const sql = `insert into blog (userId,title,content,eyecatch,createdAt) values (${userId},'${user.title}','${user.content}','${req.files.eyecatch.name}',cast(now() as datetime))`
  pool.query(sql).then(() => console.log('created new blog!')).catch((err)=>{console.log(err)})
}

module.exports = postBlog;
