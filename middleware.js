module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide Age");
  } else if (req.query.age < 18) {
    res.send("Not a valid age");
  } else {
    next();
  }
};
