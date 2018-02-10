var express = require('express');
var router = express.Router();
var db = require('../static/database.js').db;

router.get('/', function(req, res, next) {
  console.log("Current session ID: ",(req.sessionID));
  console.log("Username: ",(req.session.username));
  console.log("Token: ", req.session.token);
  console.log("Current session: ", req.session);

  res.json([{
    id: 1,
    title: "Title 1"
  },
  {
    id: 2,
    title: "Title 2"
  }])
});

module.exports = router;
