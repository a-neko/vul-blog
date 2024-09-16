function is_login(req, res, next) {
  if (req.user) {
    // loginした状態なら、通す
    next()
  } else {
    // loginしてないならこのページに飛ばす
    res.redirect('/login')
  }
}
module.exports=is_login;





