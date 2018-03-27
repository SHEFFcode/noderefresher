const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let passWord = 'abc123';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(passWord, salt, (err, hash) => {
    console.log(hash);
  });
});


class User {
  static findByToken(token) {
    let User = this;
    let decoded;
    try {
      decoded = jwt.verify(token, 'abc123');
    } catch {

    }

    User.findByToken()
  }

  generateToken() {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
    return token;
  }
}