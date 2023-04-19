const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const isAuth = require('./util/is-auth');
const csrf = require('csurf');
const csrfProtection = csrf();

const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//CSRF Protection
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta /hola');
});

const rutasUsuarios = require('./routes/usuarios.routes');

app.use('/usuarios', rutasUsuarios);

const rutasFormula1 = require('./routes/formula1.routes');

app.use('/pilotos', isAuth, rutasFormula1);

const rutasPagina = require('./routes/pagina.routes');

app.use('/pagina', rutasPagina);

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

app.use((request, response, next) => {
    console.log("No existe la ruta");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);