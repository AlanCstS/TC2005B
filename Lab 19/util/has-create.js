module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('registrar_pilotos') >= 0)) {
        return response.redirect('/pilotos');
    }
    next();
}