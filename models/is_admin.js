function isAdmin(req, res, next) {
  if (req.hasOwnProperty('user')) {
    const id = req.user[0].id;
    console.log(id)
    if (id === 1) {
      res.render('index', {id: 1})
    } else {
      res.render('index', {id: 0})
    }
  } else {
    res.render('index', {id: 0})
  }
}

module.exports = isAdmin;
