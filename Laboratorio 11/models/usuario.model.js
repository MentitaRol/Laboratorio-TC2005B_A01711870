const db = require('../util/database');
const bycrypt = require('bcryptjs');

module.exports = class Usuario{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto
    save(){
        return bycrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usuarios(username, password) VALUES (?, ?)',
                [this.username, password_cifrado]
            );
        }).catch((error) => {
            console.log(error);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username=?', [username]);
    }

    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        }else{
            return this.fetchAll();
        }
    }

    static getPrivilegios(username){
        return db.execute(
            `SELECT p.nombre
            FROM privilegios P, rol_privilegio RP, roles R, usuario_rol UR, usuarios U
            WHERE P.id = RP.privilegio_id 
            AND RP.rol_id = R.id 
            AND R.id = UR.rol_id 
            AND UR.usuario_id = U.id 
            AND U.username = ?`,
            [username]);
    }
}