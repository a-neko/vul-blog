const pool=require('./accessDB');
function getPostData(req,res,next,postId){
  console.log(typeof(postId))
  if(typeof(postId)=== "number"){
    const sql=`select user.name ,blog.title, blog.content ,blog.eyecatch ,blog.createdAt from user, blog where blog.id='${postId}' and user.id=blog.userId;`
    pool.query(sql).then((data)=>{
      const blog=data[0]
      console.log(blog);
      res.render(`blogs/detail`,{blog: blog});
    })
  }else{
    res.send('bad request')
  }

}
module.exports=getPostData;
