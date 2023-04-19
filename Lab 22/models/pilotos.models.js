const db = require('../util/database');

module.exports = class Piloto {
    
    constructor(nuevo_piloto) {
        this.nombre = nuevo_piloto.nombre || 'Piloto de Formula 1';
        this.imagen = nuevo_piloto.imagen || 'placeholder.jpg';
        this.equipo = nuevo_piloto.equipo || 'Error';
        this.pais = nuevo_piloto.pais || 'Pais no registrado';
        this.descripcion = nuevo_piloto.descripcion || 'Un gran piloto muy rápido'
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save(){
        return db.execute(`
            INSERT INTO pilotos (nombre, imagen, descripcion, equipo_ID, pais) 
            values (?, ?, ?, ?, ?)
        `, [this.nombre, this.imagen, this.descripcion, this.equipo, this.pais]
        );
    }

    static fetchAll(){
        return db.execute(
            `SELECT p.ID, p.nombre, p.imagen, p.descripcion, p.pais, p.created_at, e.nombre as equipo
            FROM pilotos p, equipos e
            WHERE p.equipo_ID = e.ID
            `
        );
    }

    static fetchOne(id) {
        return db.execute(
            `SELECT p.ID, p.nombre, p.imagen, p.descripcion, p.pais, p.equipo_ID, p.created_at, e.nombre as equipo
            FROM pilotos p, equipos e
            WHERE p.equipo_ID = e.ID AND p.ID = ?
            `, [id]
        );
    }

    static fetch(id) {
        if (id) {
            return Piloto.fetchOne(id);
        } else {
            return Piloto.fetchAll();
        }
    }

    static delete(id) {
        return db.execute(
            `DELETE FROM pilotos WHERE pilotos.ID = ?
            `, [id]
        );
    }
}

