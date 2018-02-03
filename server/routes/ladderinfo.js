var express = require('express');
var router = express.Router();
var db = require( '../static/database').db;

router.get('/', function(req, res, next) {

  res.json([{
    id: 1,
    title: "Ladderinfo 1"
  },
  {
    id: 2,
    title: "Ladderinfo 2"
  }])
});

module.exports = router;
