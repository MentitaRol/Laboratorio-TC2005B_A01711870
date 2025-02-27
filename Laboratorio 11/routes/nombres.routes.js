//Si los archivos comienzan a crecer, es importante reestructurarlos semánticamente en módulos para que sean más fáciles de mantener.

const express = require('express');

const router = express.Router();

const nombres = [];

router.get('/agregar', (request, response, next) => {
    response.render('agregar_nombre');
});

router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    nombres.push(request.body.nombre);
    console.log(nombres);

    response.render('lista_nombres', {
        nombres: nombres,
    });
});

const path = require('path');

router.get('/mostrar', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
});

module.exports = router;