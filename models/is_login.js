function is_login(req, res, next) {
  if (req.session.passport.user) {
    console.log(req.session.passport)
    // loginした状態なら、通す
    next()
  } else {
    // loginしてないならこのページに飛ばす
    res.redirect('/login')
  }
}

module.exports = is_login;
