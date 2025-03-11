const {info} = require('console');

const Nombre = require('../models/nombre.model');

exports.get_agregar = (request, response, next) => {
    console.log(request.session);
    response.render('agregar_nombre', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
}

exports.post_agregar = (request, response, next) => {
    const nombre = new Nombre(request.body.nombre);
    nombre.save()
        .then(() => {
            request.session.info = `Nombre ${nombre.nombre} guardado.`;
            response.redirect('/nombres');
        })
        .catch((error) => {
            console.log(error);
        });

    response.setHeader('Set-Cookie', `ultimo_nombre = ${nombre.nombre}`);
};

exports.get_lista = (request, response, next) => {
    const mensaje = request.session.info || '';
    if(request.session.info){
        request.session.info = '';
    }

    Nombre.fetch(request.params.id)
        .then(([rows, fielData]) => {
            response.render('lista_nombres', {
                nombres: rows,
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                info: mensaje,
                privilegios: request.session.privilegios || [],
            });
        })
        .catch((error) => {
            console.log(error);
    });
};

exports.get_mostrar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
};