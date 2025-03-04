const Nombre = require('../models/nombre.model');

exports.get_agregar = (request, response, next) => {
    console.log(request.session);
    response.render('agregar_nombre', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
}

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const nombre = new Nombre(request.body.nombre);
    nombre.save();

    response.setHeader('Set-Cookie', `ultimo_nombre = ${nombre.nombre}`);

    response.redirect('/nombres');
};

exports.get_lista = (request, response, next) => {
    response.render('lista_nombres', {
        nombres: Nombre.fetchAll(),

        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

exports.get_mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
};