const express = require('express');
const router = express.Router();

const personal_controller = require('../controllers/personal.controller');
router.get('/personal', personal_controller.get_personal);

module.exports = router;
