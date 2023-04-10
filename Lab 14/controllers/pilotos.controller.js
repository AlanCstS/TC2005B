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

    request.session.ultimo_piloto = piloto.nombre + ' | ' + piloto.equipo;

    response.redirect('/pilotos/');
}

exports.listar = (request,response,next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookue', 'consultas=' + consultas + '; HttpOnly');
    
    response.render('lista', {
        pilotos: Piloto.fetchAll(),
        ultimo_piloto: request.session.ultimo_piloto || '',
     });
};