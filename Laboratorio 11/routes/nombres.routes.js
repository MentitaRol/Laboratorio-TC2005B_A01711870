//Si los archivos comienzan a crecer, es importante reestructurarlos semánticamente en módulos para que sean más fáciles de mantener.

const express = require('express');

const router = express.Router();

//Separar logica de controladores y rutas | lab 13
const nombres_controller = require('../controllers/nombres.controller');
router.get('/agregar', nombres_controller.get_agregar);

router.post('/agregar', nombres_controller.post_agregar);

router.get('/mostrar', nombres_controller.get_mostrar);

router.get('/', nombres_controller.get_lista);

module.exports = router;