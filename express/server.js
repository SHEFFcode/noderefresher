const express = require('express');
let app = express();

/*
Middleware
*/
app.use(express.static(__dirname + '/public'));

/*
API
*/

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.listen(3000, () => console.log('app started on port 3000...'))