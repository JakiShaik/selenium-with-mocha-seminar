var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const r_id = 'kelley-'+Math.floor(Math.random()*10);
  res.render('index', { title: 'Express',r_id:r_id });
});

module.exports = router;
