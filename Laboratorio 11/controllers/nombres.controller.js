const path = require('path');
const Nombre = require('../models/nombre.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_nombre');
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const nombre = new Nombre(request.body.nombre);
    nombre.save();

    response.render('lista_nombres', {
        nombres: Nombre.fetchAll(),
    });
};

exports.get_mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
};