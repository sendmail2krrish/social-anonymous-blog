let express = require('express');
let session = require('express-session');
let route = express.Router();
let db = require('../database/config');

route.get('/', function(req, res) {
  res.send('Api version 1 :)');
});

route.post('/submit', function(req, res) {
  let input = req.body;
  let ip = req.connection.remoteAddress;
  let date = new Date().toString();
  let postdata = {post_title: input.posttitle, post_content: input.postcontent, ip: ip, status: 1, created_at: date};

  db.query("INSERT INTO posts SET ?", postdata, function (err, posts, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json({"status": 200, "error": null, "posts": fields});
    }
  });
});

route.get('/posts', function(req, res) {
  db.query("SELECT * FROM posts WHERE status='1' ORDER BY post_id DESC", function (err, posts, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json({"status": 200, "error": null, "posts": posts});
    }
  });
});

route.get('/post/:post_id', function(req, res) {
  db.query("SELECT * FROM posts WHERE post_id='"+req.params.post_id+"' AND status='1'", function (err, posts, fields) {
    if (err) {
      console.log(err);
    } else {
      db.query("SELECT * FROM comments WHERE post_id='"+req.params.post_id+"' AND status='1' ORDER BY cmnt_id DESC", function (err, comments, fields) {
        if (err) {
          console.log(err);
        } else {
          res.json({"status": 200, "error": null, "posts": posts, "comments": comments});
        }
      });
    }
  });
});

route.post('/submit-comment', function(req, res) {
  let input = req.body;
  let ip = req.connection.remoteAddress;
  let date = new Date().toString();
  let postdata = {post_id: input.postid, cmnt_content: input.cmntcontent, ip: ip, status: 1, created_at: date};

  db.query("INSERT INTO comments SET ?", postdata, function (err, posts, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json({"status": 200, "error": null, "posts": fields});
    }
  });
});

module.exports = route;