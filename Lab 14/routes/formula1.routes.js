const express = require('express');

const router = express.Router();

const pilotosControler = require('../controllers/pilotos.controller');

router.get('/nuevo', pilotosControler.get_nuevo);

router.post('/nuevo', pilotosControler.post_nuevo);

router.get('/', pilotosControler.listar);

module.exports = router;