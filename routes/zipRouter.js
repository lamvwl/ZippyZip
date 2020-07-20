const express = require('express');
const router = express.Router();
const cors = require('cors')
const ZipCtrl = require('../services/zipCtrl');

router.use(cors());

router.get('/findone', ZipCtrl.findone);
router.get('/findall', ZipCtrl.findall);
router.get('/findcity*', ZipCtrl.findcity);
router.get('/findstate*', ZipCtrl.findstate);

module.exports = router