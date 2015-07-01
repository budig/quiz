var express = require('express');   //importar middlewares
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');

var routes = require('./routes/index');   //Importar enrutadores

var app = express();    //Crear aplicacion

// view engine setup
app.set('views', path.join(__dirname, 'views'));    //Se instala generador de
app.set('view engine', 'ejs');        //vistas

app.use(partials());
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //instalar middlewares
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);   //agregar rutas


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');   //rutas no existentes: Error 404
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {   //Gestion de errores durante
        res.status(err.status || 500);    //desarrollo
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);        //gestion de errores en produccion
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//exporta app para comando arranque
module.exports = app;
