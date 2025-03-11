module.exports = (request, response, next) => {
    let canCreate = false;
    for(let privilegio of request.session.privilegios){
        if(privilegio.nombre == "ver nombres"){
            canCreate = true;
            next();
        }   
    }
    if(!canCreate){
        response.status(404).send('Pagina no encontrada');
    }
};