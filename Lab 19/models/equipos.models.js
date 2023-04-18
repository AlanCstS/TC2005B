const db = require('../util/database');

module.exports = class Equipo {
    constructor() {

    }

    save(){

    }

    static fetchAll(){
        return db.execute(
            `SELECT e.ID, e.nombre
            FROM equipos e`
        );
    }
}