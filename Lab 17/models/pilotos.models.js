const db = require('../util/database');

module.exports = class Piloto {
    
    constructor(nuevo_piloto) {
        this.nombre = nuevo_piloto.nombre || 'Piloto de Formula 1';
        this.imagen = nuevo_piloto.imagen || 'https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-hombre-icono-de-usuario-aislado-en-un-fondo-blanco-avatar-cuenta-para-la-web-foto-de-perfil-de.jpg?ver=6';
        this.equipo = nuevo_piloto.equipo || 'Equipo no registrado';
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

    static fetchOne(ID) {
        return db.execute(
            `SELECT p.ID, p.nombre, p.imagen, p.descripcion, p.pais, p.created_at, e.nombre as equipo
            FROM pilotos p, equipos e
            WHERE p.equipo_ID = e.ID AND e.ID = ?
            `, [ID]
        );
    }

    static fetch(ID) {
        if (ID) {
            return Piloto.fetchOne(ID);
        } else {
            return Piloto.fetchAll();
        }
    }
}

