
const express = require('express');
const path = require('path');
const app = express();
const staticPath = path.join(__dirname,'../public');
const PORT = process.env.PORT || 8080;
app.use(express.static(staticPath));
app.set("view engine","hbs")

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/code', function (req, res) {
  res.render('code');
});

app.listen( PORT, function () {
console.log('Example app listening on port ${PORT}');
});