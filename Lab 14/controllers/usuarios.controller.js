exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/pilotos'); //Este código se ejecuta cuando la sesión se elimina.
    });
};