const Nombre = require('../models/nombre.model');

exports.get_agregar = (request, response, next) => {
    console.log(request.session);
    response.render('agregar_nombre', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
}

exports.post_agregar = (request, response, next) => {
    const nombre = new Nombre(request.body.nombre);
    nombre.save()
        .then(() => {
            response.redirect('/nombres');
        })
        .catch((error) => {
            console.log(error);
        });

    response.setHeader('Set-Cookie', `ultimo_nombre = ${nombre.nombre}`);
};

exports.get_lista = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('lista_nombres', {
        nombres: Nombre.fetchAll(),

        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

exports.get_mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
};