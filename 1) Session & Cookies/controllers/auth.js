exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  app.use((req, res, next) => {
    User.findById('64a3fe9300a3734c14021df8')
      .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      })
      })
      .catch(err => console.log(err));
  });
};

exports.postLogout = (req,res,next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  })
}
