const nombres = [];

exports.get_agregar = (request, response, next) => {
    response.render('agregar_nombre');
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    nombres.push(request.body.nombre);
    console.log(nombres);

    //Laboratorio 12 
    response.render('lista_nombres', {
        nombres: nombres,
    });
};