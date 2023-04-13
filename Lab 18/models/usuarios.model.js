const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || 'Boby Larios';
        this.username = nuevo_usuario.username || 'boby';
        this.password = nuevo_usuario.password || '1234';
    }

    save() {    
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute(`
                INSERT INTO usuarios (nombre, username, password)
                VALUES (?, ?, ?)
            `, [this.nombre, this.username, password_cifrado]);
        }).catch((error) => {console.log(error)});
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT *
            FROM usuarios
            WHERE username = ?
        `, [username]);
    }
    
}