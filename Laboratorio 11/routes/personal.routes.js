const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/personal', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'fer_personal.html'))
});

module.exports = router;
