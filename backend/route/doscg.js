const express = require('express');
const router = express.Router();

const { findValue1 } = require('../controller/doscg/findValue1');
const { findValue2 } = require('../controller/doscg/findValue2');
const { notiChat } = require('../controller/doscg/notiChat');
const { getDirection } = require('../controller/doscg/getDirection');

router.route('/').get(findValue1);
router.route('/').get(findValue2);
router.route('/').get(notiChat);
router.route('/').get(getDirection);

module.exports = router;