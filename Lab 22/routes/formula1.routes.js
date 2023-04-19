const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');

const pilotosController = require('../controllers/pilotos.controller');

router.get('/nuevo', hasCreate, pilotosController.get_nuevo);

router.post('/nuevo', hasCreate, pilotosController.post_nuevo);

router.get('/:id', pilotosController.listar);

router.get('/', pilotosController.listar);

module.exports = router;