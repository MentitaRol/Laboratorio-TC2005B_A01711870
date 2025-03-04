// lab 11 y 12

const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Variables de configuración de Express, la carpeta donde estarán almacenados los archivos html correspondientes a las vistas

app.set('view engine', 'ejs');
app.set('views', 'views');

//agregamos como middleware el manejo de sesiones

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//body-parser es un middleware de Express que permite analizar los datos del cuerpo 
// de una solicitud HTTP y convertirlos en un formato accesible para node

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Configurar un modulo de express -> Middleware

//Middleware: software que esta entre un sistema operativo y las aplicaciones que se ejecutan en el.
//Permite la comunicación y administración de datos en aplicaciones

const rutasNombres = require('./routes/nombres.routes');
app.use('/nombres', rutasNombres);

app.use(express.static(path.join(__dirname, 'public')));
const FerPersonal = require('./routes/personal.routes');
app.use('/Fer', FerPersonal);

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

app.use((request, response) => {
    response.status(404).send('Pagina no encontrada');
});

app.listen(3000);