var express = require('express');
var router = express.Router();

// require controller modules
var ctrlMain = require('../controllers/main');

// home page request
router.get('/', ctrlMain.index);
// root page request, redirect to home page which accesses the index controller


module.exports = router;