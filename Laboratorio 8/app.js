//require nos permite obtener los modulos de js
//fs accede a los archivos del sistema
const filesystem = require('fs');

//crea un archivo .txt y escribe en el 'Hola desde node'
filesystem.writeFileSync('hola.txt', 'Hola desde node');