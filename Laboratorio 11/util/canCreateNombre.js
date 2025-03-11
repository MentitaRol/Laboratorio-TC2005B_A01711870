module.exports = (request, response, next) => {
    console.log(request.session.privilegios);
    let canCreate = false;
    for(let privilegio of request.session.privilegios){
        if(privilegio.nombre == "agregar nombres"){
            console.log("next middleware crear nombre");
            canCreate = true;
            next();
        }   
    }
    if(!canCreate){
        response.status(404).send('Pagina no encontrada');
    }
};