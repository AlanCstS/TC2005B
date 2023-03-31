const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

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

const rutasFormula1 = require('./routes/formula1.routes');

app.use('/', rutasFormula1);

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