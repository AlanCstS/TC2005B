const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');

const pilotosController = require('../controllers/pilotos.controller');

router.get('/editar/:id', hasCreate, pilotosController.get_editar);

router.get('/editar', hasCreate, pilotosController.get_nuevo);

router.post('/editar/:id', hasCreate, pilotosController.post_editar);

router.post('/editar/', hasCreate, pilotosController.post_editar);

router.get('/borrar/:id', hasCreate, pilotosController.borrar);

router.get('/borrar/', hasCreate, pilotosController.borrar);

router.get('/nuevo', hasCreate, pilotosController.get_nuevo);

router.post('/nuevo', hasCreate, pilotosController.post_nuevo);

router.get('/:id', pilotosController.listar);

router.get('/', pilotosController.listar);

module.exports = router;