var express = require('express');
var router = express.Router();
var fetch = require('../api/fetch.js');

router.get('/', fetch.profileFeedFetch);
module.exports = router;