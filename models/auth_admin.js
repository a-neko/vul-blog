function auth_admin(req, res, next) {
  if (req.hasOwnProperty('user')) {
    if (req.user[0].name === 'admin') {
      next();
    } else {
      // loginしてないならこのページに飛ばす
      res.redirect('/login')
    }
  }else
  {
    res.redirect('/login')
  }
}
module.exports = auth_admin;
