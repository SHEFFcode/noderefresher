const express = require('express');
let app = express();

/*
Middleware
*/
app.use((req, res, next) => {
  console.log('hello');
  next();
});
// app.use(express.static(__dirname + '/public'));

/*
API
*/

app.get('/', (req, res) => {
  res.send('Hey word!!');
});

app.post('/users', () => {
  user.save()
    .then(() => {
      return user.generateAuthToken();
    })
      .then((token) => {
        res.header('x-auth', token).send(user);
      });
});

app.get('/users/me', (req, res) => {
  let token = req.header('x-auth');
  User.findByToken();
})

app.listen(3000, () => console.log('app started on port 3000...'))

module.exports.app = app;