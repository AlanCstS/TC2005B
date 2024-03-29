const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/personal', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;