function getUserId(req,res,next){
  return req.user.id;
}
module.exports=getUserId;
