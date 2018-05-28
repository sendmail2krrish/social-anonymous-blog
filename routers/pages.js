let express = require('express');
let session = require('express-session');
let route = express.Router();
let db = require('../database/config');

route.post('/submit', function(req, res) {
  let input = req.body;

  res.send(JSON.stringify(input));
});

route.get('/', function(req, res) {
  res.render('index');
  //res.send("Here will be angular js");
});

//route.get('/:post_id/:post_slug', function(req, res) {});

module.exports = route;