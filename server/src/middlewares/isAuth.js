module.exports = function isAuth (req, res, next) {
  if (req.session?.user.name === '111') {
    res.sendStatus(210);
  } 
  if (req.session?.user.name === 'admin') {
    res.sendStatus(220)
  }
  else {
    next();
  }
};
