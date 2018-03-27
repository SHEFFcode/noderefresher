module.exports.add = function (a, b) {
  return a + b;
}

module.exports.asyncAdd = function (a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
}