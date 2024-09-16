
function is_login(req, res, next) {
  console.log(req)
  if (req) {
    // loginした状態なら、通す
    next()
  } else {
    // loginしてないならこのページに飛ばす
    res.redirect('/login')
  }
}
module.exports=is_login;





