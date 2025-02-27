//Si los archivos comienzan a crecer, es importante reestructurarlos semánticamente en módulos para que sean más fáciles de mantener.

const express = require('express');

const router = express.Router();

const html_content = ``;

const nombres = [];

router.get('/agregar', (request, response, next) => {
    response.render('agregar_nombre')
});

router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    nombres.push(request.body.nombre);
    console.log(nombres);
    let html = html_content;
    for(let nombre of nombres){
        html += nombre + ' ';
    }
    response.send(html);
});

const path = require('path');

router.get('/mostrar', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
});

module.exports = router;