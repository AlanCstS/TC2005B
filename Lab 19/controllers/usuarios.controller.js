const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcryptjs');

exports.get_login = (req, res, next) => {

    const mensaje = req.session.mensaje || '';

    if (req.session.mensaje) {
        req.session.mensaje  = '';
    }

    res.render('login', {
        mensaje: mensaje,
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
}

exports.post_login = (req, res, next) => {
    
    Usuario.fetchOne(req.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            console.log(rows);
            bcrypt.compare(req.body.password, rows[0].password)
            .then((doMatch) => {
                if(doMatch) {
                    req.session.isLoggedIn = true;
                    req.session.nombre = rows[0].nombre;
                    Usuario.fetchPrivilegios(rows[0].username)
                    .then(([consulta_privis, fieldData]) => {
                        console.log(consulta_privis);

                        const privilegios = [];
                        for(let privilegio of consulta_privis) {
                            privilegios.push(privilegio.nombre);
                        }
                        
                        req.session.privilegios = privilegios
                        console.log("Privilegios de sesión: " + req.session.privilegios);

                        return req.session.save(err => {
                        res.redirect('/pilotos');
                        });
                    })
                    .catch((error) => console.log(error));
                    

                } else {
                    req.session.mensaje = 'Usuario y/o contraseña incorrectos';
                    res.redirect('/usuarios/login');
                }
            })
            .catch((err) => console.log(err));

        } else{
            req.session.mensaje = 'Usuario y/o contraseña incorrectos';
            res.redirect('/usuarios/login');
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.get_signup = (request, response, next) => {

    const mensaje = request.session.mensaje || '';

    if (request.session.mensaje) {
        request.session.mensaje  = '';
    }

    response.render('signup', {
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};  

exports.post_signup = (req, res, next) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        username: req.body.username,
        password: req.body.password,
    });

    Usuario.fetchOne(req.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length > 0){
            req.session.mensaje = "Usuario ya existente, eliga otro por favor!";
            res.redirect('/usuarios/signup');
        } else {
            usuario.save()
            .then(([rows, fieldData]) => {
                res.redirect('/usuarios/login');
            })
            .catch((error) => {console.log(error)});
        }
    })
    .catch((err) => {console.log(err)});    
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};