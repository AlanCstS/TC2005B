const Piloto = require('../models/pilotos.models');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request,response,next) => {
    const piloto = new Piloto({
        nombre: request.body.nombre,
        equipo: request.body.equipo,
        descripcion: request.body.descripcion,
        pais: request.body.pais,
    });

    piloto.save();
    response.redirect('/');
}

exports.listar = (request,response,next) => {
    response.render('lista', {pilotos: Piloto.fetchAll() });
};