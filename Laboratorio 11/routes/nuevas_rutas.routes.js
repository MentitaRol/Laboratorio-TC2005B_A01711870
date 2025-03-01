const express = require('express');
const router = express.Router();

router.get('/hola_mundo', (requiere, response) => {
    response.send(`<h1>Hola mundo!</h1>`);
});

router.get('/awa', (requiere, response) => {
    response.send(`<h1>Página que dice "awa"</h1>`);
});

router.get('/pilon', (require, response) => {
    response.send(`<h1>Una más, por si acaso</h1>`)
});


module.exports = router;