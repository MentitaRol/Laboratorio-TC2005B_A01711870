//Si los archivos comienzan a crecer, es importante reestructurarlos semánticamente en módulos para que sean más fáciles de mantener.

const express = require('express');

const router = express.Router();

const isAuth = require('../util/is-auth');

const canCreateNombre = require('../util/canCreateNombre');

//Separar logica de controladores y rutas | lab 13
const nombres_controller = require('../controllers/nombres.controller');
router.get('/agregar', isAuth, canCreateNombre, nombres_controller.get_agregar);

router.post('/agregar', isAuth, canCreateNombre, nombres_controller.post_agregar);

router.get('/mostrar', isAuth, nombres_controller.get_mostrar);

// ruta dinamica
router.get('/:id', isAuth, nombres_controller.get_lista);

router.get('/', nombres_controller.get_lista);

module.exports = router;