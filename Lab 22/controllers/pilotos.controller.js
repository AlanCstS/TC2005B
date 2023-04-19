const Piloto = require('../models/pilotos.models');
const Equipo = require('../models/equipos.models');

exports.get_editar = (req, res, next) => {
    
    Piloto.fetchOne(req.params.id)
    .then(([piloto_consulta, fieldData]) => {
        if(piloto_consulta.length == 1) {

            const piloto = new Piloto({
                ID: piloto_consulta[0].ID,
                nombre: piloto_consulta[0].nombre,
                imagen: piloto_consulta[0].imagen,
                descripcion: piloto_consulta[0].descripcion,
                pais: piloto_consulta[0].pais,
                equipo: piloto_consulta[0].equipo_ID
            });

            Equipo.fetchAll()
            .then(([rows, fieldData]) => {
                res.render('nuevo',{
                    equipos: rows,
                    isLoggedIn: req.session.isLoggedIn || false,
                    nombre: req.session.nombre || '',
                    piloto: piloto || false,
                });
            }).catch(error => console.log(error));

        } else {
            return res.redirect('/pilotos/nuevo');
        }
    }).catch(error => console.log(error));
};

exports.post_editar = (req, res, next) => {
    console.log("Datos a editar:");
    console.log(req.body);

};

exports.get_borrar = (req, res, next) => {
    
    const id = req.params.id;
    if(id){
        Piloto.delete(id)
        .then(([rows, fieldData]) => {
            req.session.mensaje = 'Piloto eliminado exitosamente';
            res.redirect('/pilotos');
        })
        .catch(error => console.log(error))
    }
    else {
        res.redirect('/pilotos');
    };
    
};

exports.get_nuevo = (request, response, next) => {
    
    Equipo.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('nuevo', {
            equipos: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            piloto: false,
        });
    }).catch(error => console.log(error));
    
};

exports.post_nuevo = (request,response,next) => {
    //console.log(request.file);
    let imagen = '';
    if (request.file) {
        imagen = request.file.filename 
    };

    const piloto = new Piloto({
        nombre: request.body.nombre,
        equipo: request.body.equipo,
        descripcion: request.body.descripcion,
        pais: request.body.pais,
        imagen: imagen,
    });

    piloto.save()
    .then(([rows, fieldData]) => {

        request.session.mensaje = "Piloto registrado exitosamente";

        request.session.ultimo_piloto = piloto.nombre;

        response.redirect('/pilotos/');
    }).catch((error) => {console.log(error)});

    
}

exports.listar = (request,response,next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    let mensaje = '';

    if(request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }
    
    Piloto.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            pilotos: rows,
            ultimo_piloto: request.session.ultimo_piloto || '',
            mensaje: mensaje,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(err => {console.log(err);});
    
};